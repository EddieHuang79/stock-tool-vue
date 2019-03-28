<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <div class="card">
          <div class="card-header">
            <strong>{{ txt.BuySellPercentReportTitle }}</strong>
            <div class="card-header-actions">
              <auto-complete-input ref="autoCompleteData" place-holder="請輸入股票名稱或是代號" :data="stockSearchOption" @searchBtn="search()"/>
            </div>
          </div>
          <div class="card-body" id="SellPercentReport">
            <buy-sell-percent-chart v-show="display" ref="chart" style="height:600px; width:100%;" :title="stockCode"></buy-sell-percent-chart>
            <div v-show="display === false">No Data</div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import BuySellPercentChart from '@/components/BuySellPercentChart'
import axios from 'axios'
import { Txt } from '@/tableSchema/WebWord';
import AutoCompleteInput from '@/components/AutoCompleteInput'

export default {
  name: 'BuySellPercentReport',
  components: {
    BuySellPercentChart,
    AutoCompleteInput
  },
  created() {
    this.loadData()
  },
  data: function () {
    return {
      display: false,
      data: {
        stock: [],
        result: []
      },
      txt: Txt,
      stockSearchOption: [],
      stockCode: '',
      stockData: {},
      autoCompleteData: []
    }
  },
  methods: {
    loadData () {
      axios.get(this.$root.$refs.app.serverURL + '/get_stock_list').then((response) => {
          if (response.data.error === false) {
              this.stockSearchOption = response.data.data
          } else {
              this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
          }
      })
    },
    search() {
      let code = this.$refs.autoCompleteData.getResult().toString()
      this.display = false
      axios.get(this.$root.$refs.app.serverURL + '/get_buy_sell_report?code=' + code).then((response) => {
          if (response.data.error === false) {
              this.$refs.chart.setTitle( response.data.data.data )
              this.$refs.chart.setData( response.data.data )
              this.display = true
          } else {
              this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
          }
      })
    }
  }
}
</script>
