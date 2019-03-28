// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './polyfill'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router/index'
import './assets/custom.css'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'

stockInit(Highcharts)
mapInit(Highcharts)

// todo
// cssVars()
Vue.use(BootstrapVue)
// Vue.use(HighchartsVue, {tagName: 'charts'})
Vue.use(HighchartsVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App ref="app"/>',
  components: {
    App
  }
})
