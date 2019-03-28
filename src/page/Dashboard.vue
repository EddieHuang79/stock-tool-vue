<template>
  <div class="animated fadeIn">
   <b-row>
    <b-col sm="12">
      <b-card>
        <div slot="header">
          操作說明
        </div>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟1: 點選股票設定
            </div>
            <img src="@/../public/doc/doc1.png" alt="">
          </b-card>
        </b-col>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟2: 輸入要設定的股票名稱與代號
            </div>
            <img src="@/../public/doc/doc2.png" alt="" width="90%">
          </b-card>
        </b-col>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟3: 選好日期區間，點選取得資料
            </div>
            <img src="@/../public/doc/doc3.png" alt="" width="80%">
          </b-card>
        </b-col>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟4: 點選計算資料
            </div>
            <img src="@/../public/doc/doc4.png" alt="" width="80%">
          </b-card>
        </b-col>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟5: 前往買賣壓力道比例
            </div>
            <img src="@/../public/doc/doc5.png" alt="">
          </b-card>
        </b-col>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              步驟6: 輸入股票代號，即可產生圖表
            </div>
            <img src="@/../public/doc/doc6.png" alt="" width="80%">
          </b-card>
        </b-col>
      </b-card>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import CardLine1ChartExample from '@/views/dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '@/views/dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '@/views/dashboard/CardLine3ChartExample'
import CardBarChartExample from '@/views/dashboard/CardBarChartExample'
export default {
  name: 'dashboard',
  components: {
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample
  },
  mounted() {
    this.$root.$refs.app.isLogin()
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
