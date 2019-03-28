<template>
  <div class="animated fadeIn">
    <basic-form ref="basicForm" page="users" :title="txt.CreateAccountBtn" :setting="data" :data-item="serviceList" @senddata="submitForm" :default-data="dataSchema"/>
  </div>
</template>

<script>
import BasicForm from '@/components/BasicForm'
import { Txt } from '@/tableSchema/WebWord';
import { CreateAccount } from '@/tableSchema/TableSchema';
import axios from 'axios'

export default {
  name: 'CreateUser',
  components: {
    BasicForm
  },
  mounted() {
    this.loadData()
    this.CreateSchema()
  },
  data: function () {
    return {
      txt: Txt,
      data: CreateAccount,
      serviceList: [],
      dataSchema: {}
    }
  },
  methods: {
    loadData() {
        this.$root.$refs.app.showLoadingPage()
        axios.get(this.$root.$refs.app.serverURL + '/service?_token=' + this.$root.$refs.app.token).then((response) => {
            this.$root.$refs.app.closeLoadingPage()
            if (response.data.error === false) {
                this.serviceList = response.data.data
            } else {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
                this.$router.push( { path: '/login' } )
            }
        })
    },
    CreateSchema() {
      if ( typeof this.$route.params.id !== 'undefined' ) {
        let id = parseInt(this.$route.params.id)
        axios.get(this.$root.$refs.app.serverURL + '/user/' + id + '?_token=' + this.$root.$refs.app.token).then((response) => {
            if (response.data.error === false) {
                this.dataSchema = Object.assign({}, response.data.data)
            } else {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
                this.$router.push( { path: '/login' } )
            }
        })          
      } else {
        for( let i in this.data ) {
          this.$set(this.dataSchema, this.data[i].key, this.data[i].value)
        }
      }
    },
    submitForm() {
        let data, inputData, id, url
        data = new FormData()
        inputData = this.$refs.basicForm.data
        id = typeof this.$route.params.id !== 'undefined' ? this.$route.params.id : ''
        url = typeof this.$route.params.id !== 'undefined' ? this.$root.$refs.app.serverURL + '/user/' + this.$route.params.id : this.$root.$refs.app.serverURL + '/user'
        data.append('account', inputData.account)
        data.append('password', inputData.password)
        data.append('email', inputData.email)
        data.append('status', inputData.status)
        data.append('_token', this.$root.$refs.app.token)
        for (let i in inputData.auth) {
            data.append('auth['+i+']', inputData.auth[i])
        }
        if ( id !== '' ) {
          data.append('_method', "patch")
        }
        axios.post(url, data).then((response) => {
            if ( response.data.error === true ) {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
            } else {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
                this.$root.$refs.app.$refs.SystemMessage.hideModal()
                this.$router.push( { path: '/users' } )
            }
        })
    }
  }
}
</script>
