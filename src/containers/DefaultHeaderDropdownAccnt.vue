<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      {{ account }}
    </template>\
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>{{ txt.option }}</strong>
      </b-dropdown-header>
      <b-dropdown-item @click="logout()"><i class="fa fa-lock" /> {{ txt.Logout }}</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { Txt } from '@/tableSchema/WebWord';
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import axios from 'axios'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { 
      itemsCount: 42,
      txt: Txt
    }
  },
  computed: {
      account() {
          return this.$root.$refs.app.userData.name
      }
  },
  methods: {
    logout() {
        this.$root.$refs.app.showLoadingPage()
        let formData = new FormData()
        formData.append('_token', this.$root.$refs.app.token)
        axios.post(this.$root.$refs.app.serverURL + '/logout', formData).then((response) => {
          this.$root.$refs.app.$refs.SystemMessage.showModal( 1, this.txt.LogoutMessage )
          this.$root.$refs.app.closeLoadingPage()
          this.$router.push( { path: '/login' } )
        })
    }
  }
}
</script>
