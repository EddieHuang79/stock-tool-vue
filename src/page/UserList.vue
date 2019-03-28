<template>
  <div>
    <basic-list ref="BasicList" page="users" :title="txt.AccountTitle" :setting="setting" :data="data" @back="backLink()" @editbtn="editBtn()" @add="addLink()" :addBtn="true"/>
  </div>
</template>

<script>
  import BasicList from '@/components/BasicList'
  import { Txt } from '@/tableSchema/WebWord';
  import { Account } from '@/tableSchema/TableSchema';
  import axios from 'axios'

  export default {
    name: 'UserList',
    components: {
      BasicList
    },
    created() {
      this.loadData()
    },
    data: function () {
      return {
        txt: Txt,
        setting: Account,
        data: []
      }
    },
    methods: {
      loadData() {
          this.$root.$refs.app.showLoadingPage()
          axios.get(this.$root.$refs.app.serverURL + '/user?_token=' + this.$root.$refs.app.token ).then((response) => {
              this.$root.$refs.app.closeLoadingPage()
              if ( response.data.error === false ) {
                  this.data = response.data.data
              } else {
                  this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
                  this.$router.push( { path: '/login' } )
              }
          })
      },
      backLink() {
        this.$router.go(-1)
      },
      editBtn() {
        this.$router.push( { path: '/users/' + this.$refs.BasicList.id } )
      },
      addLink() {
        this.$router.push( { path: '/users/create_user' } )
      }
    }
  };
</script>
