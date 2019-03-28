<template>
  <div class="animated fadeIn">
    <basic-form ref="basicForm" page="stock" :title="txt.CreateAccountBtn" :setting="data" :data-item="serviceList" @senddata="submitForm" :default-data="dataSchema"/>
  </div>
</template>

<script>
import BasicForm from '@/components/BasicForm'
import { Txt } from '@/tableSchema/WebWord';
import { CreateStock } from '@/tableSchema/TableSchema';
import axios from 'axios'

export default {
  name: 'CreateUser',
  components: {
    BasicForm
  },
  mounted() {
    this.loadData()
  },
  data: function () {
    return {
      txt: Txt,
      data: CreateStock,
      serviceList: [],
      dataSchema: {}
    }
  },
  methods: {
    loadData() {
      if ( typeof this.$route.params.id !== 'undefined' ) {
        let id = parseInt(this.$route.params.id)
        axios.get(this.$root.$refs.app.serverURL + '/stock/' + id + '?_token=' + this.$root.$refs.app.token).then((response) => {
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
        url = typeof this.$route.params.id !== 'undefined' ? this.$root.$refs.app.serverURL + '/stock/' + this.$route.params.id : this.$root.$refs.app.serverURL + '/stock'
        data.append('code', inputData.code)
        data.append('name', inputData.name)
        data.append('_token', this.$root.$refs.app.token)
        if ( id !== '' ) {
          data.append('_method', "patch")
        }
        axios.post(url, data).then((response) => {
            if ( response.data.error === true ) {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
            } else {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 1, response.data.msg )
                this.$root.$refs.app.$refs.SystemMessage.hideModal()
                this.$router.push( { path: '/stock' } )
            }
        })
    }
  }
}
</script>
