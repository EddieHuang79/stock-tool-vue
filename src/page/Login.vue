<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>{{ txt.Login }}</h1>
                  <p class="text-muted">{{ txt.LoginTitle }}</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input ref="focusinput" type="text" class="form-control" :placeholder="txt.account" autocomplete="username email" v-model="account"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" :placeholder="txt.password" autocomplete="current-password" v-model="password"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" @click="login" v-show="loading === false"> {{ txt.Login }}</b-button>
                      <loading-icon v-show="loading"/>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0" @click="forgetPassword">{{ txt.ForgetPassword }}</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { Txt } from '@/tableSchema/WebWord';
import axios from 'axios'
import LoadingIcon from '@/components/LoadingIcon'
export default {
  name: 'login',
  components: {
    LoadingIcon
  },
  data: () => ({
      loading: false,
      account: '',
      password: '',
      txt: Txt,
      token: ''
  }), 
  created() {
      this.$root.$refs.app.deleteCookie('token')
      this.$root.$refs.app.deleteCookie('user')
      this.$root.$refs.app.deleteCookie('isAdmin')
      this.$nextTick(() => this.$refs.focusinput.focus());
  },
  methods: {          
      login() {         
          this.loading = true;
          let formData = new FormData()
          formData.append('account', this.account)
          formData.append('password', this.password)
          axios.post(this.$root.$refs.app.serverURL + '/login', formData).then((response) => {
              this.loading = false;
              console.log(response.data)
              if (response.data.error === false) {
                  // let path = response.data.isAdmin === true ? '/dashboard' : '/chat'
                  let path = '/dashboard'
                  this.$root.$refs.app.userData = response.data.data
                  this.$root.$refs.app.isAdmin = response.data.isAdmin
                  this.$root.$refs.app.token = response.data.token
                  this.$root.$refs.app.setCookie('token', response.data.token)
                  this.$root.$refs.app.setCookie('user', JSON.stringify(response.data.data))
                  this.$root.$refs.app.setCookie('isAdmin', response.data.isAdmin)
                  // if (response.data.isAdmin === true) {
                  //     this.$root.$refs.app.getDashBoardData()
                  // }
                  this.$router.push(path);
              } else {
                  this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
                  // this.frequency++;                        
                  // if (this.frequency == 3) {
                  //     this.$root.$refs.app.$refs.DialogOfSystemMessage.closeModalr()
                  //     this.forgetPassword();
                  // }
              }
          })

      },
      forgetPassword() {
          this.$router.push('/ForgetPassword')
      }
  }
}
</script>
