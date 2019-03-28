<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>{{ txt.ForgetPassword }}</h1>
                  <p class="text-muted">{{ txt.ForgetPasswordTitle }}</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input ref="focusinput" type="text" class="form-control" :placeholder="txt.EMail" autocomplete="username email" v-model="email"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" @click="checkEmail" v-show="loading === false"> {{ txt.ForgetPasswordBtn }}</b-button>
                      <loading-icon v-show="loading"/>
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
      email: '',
      txt: Txt,
      token: ''
  }), 
  created() {
      this.$nextTick(() => this.$refs.focusinput.focus());
  },
  methods: {
      checkEmail: function () {
          this.loading = true
          let data = new FormData()
          data.append('email', this.email)
          axios.post(this.$root.$refs.app.serverURL + '/check_mail_exist', data).then((response) => {
              if ( response.data.exist === true ) {
                  this.sendMail()
              } else {
                  this.$root.$refs.app.$refs.SystemMessage.showModal( 2, this.txt.emailNotFound )
                  this.loading = false
              }
          })
      },
      sendMail: function () {
          let data = new FormData()
          data.append('email', this.email)
          axios.post(this.$root.$refs.app.serverURL + '/password/email', data).then((response) => {
              this.loading = false
              this.$root.$refs.app.$refs.SystemMessage.showModal( 2, this.txt.PasswordSend )
              this.$router.push('/login')
          })
      }
  }
}
</script>
