<template>
  <div>
    <router-view></router-view>    
    <system-message ref="SystemMessage" />
    <full-page-loading ref="FullPageLoading" v-show="isLoading"/>
  </div>
</template>

<script>
import SystemMessage from '@/components/SystemMessage'
import FullPageLoading from '@/components/FullPageLoading'
export default {
  name: 'app',
  components: {
    SystemMessage,
    FullPageLoading
  },
  data: () => ({
    // serverURL: 'http://192.168.99.100:30300',
    // serverURL: 'http://35.234.52.62',
    serverURL: 'http://local.stock.com',
    // serverURL: '',
    token: '',
    userData: {},
    isAdmin: false,
    isLoading: false
  }),
  created() {
      this.isLogin()
  },
  methods: {
      setCookie(key, value) {
          let date, expireTime
          date = new Date()
          expireTime = date.setTime(date.getTime() + (30 * 60 * 60 * 1000))
          document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + '; path=/'
      },
      getCookie(key) {
          let data, tmp, result
          data = document.cookie
          tmp = data.split(';')
          result = ''
          for (let index in tmp) {
              if ( tmp[index].indexOf(key + "=") > -1 ) {
                  result = tmp[index].replace(key + "=", "").trim()
              }
          }
          return result
      },
      deleteCookie(key) {
          document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
          return true
      },
      isLogin() {
        if ( this.token === '' && this.$route.name !== 'Login' ) {
            let token, user, isAdmin
            user = this.getCookie('user')
            token = this.getCookie('token')
            isAdmin = this.getCookie('isAdmin')
            if (token !== '') {
                this.token = token
                this.userData = JSON.parse(user)
                this.isAdmin = isAdmin
            } else {
                this.$router.push('/login')
            }
        }
      },
      showLoadingPage() {
          this.isLoading = true
      },
      closeLoadingPage() {
          this.isLoading = false
      }
  }
}
</script>

<style lang="scss">
// CoreUI Icons Set
@import '~@coreui/icons/css/coreui-icons.min.css';
/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';
/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';
/* Import Flag Icons Set */
@import '~flag-icon-css/css/flag-icon.min.css';
/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
// Import Main styles for this application
@import 'assets/scss/style';
</style>
