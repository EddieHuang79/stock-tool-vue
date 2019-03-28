<template>
  <div>
    <basic-list ref="BasicList" page="stock" :title="txt.StockListTitle" :setting="setting" :data="displayData" @back="backLink()" @editbtn="editBtn()" @searchBtn="searchBtn()" @getDataBtn="getDataBtn()" @countDataBtn="countDataBtn()" :auto-complete-data="autoCompleteData"/>
  </div>
</template>

<script>
  import BasicList from '@/components/BasicList'
  import { Txt } from '@/tableSchema/WebWord';
  import { StockList } from '@/tableSchema/TableSchema';
  import axios from 'axios'

  export default {
    name: 'StockList',
    components: {
      BasicList
    },
    created() {
      this.loadStockData()
      this.loadData()
    },
    data: function () {
      return {
        txt: Txt,
        setting: StockList,
        data: [],
        displayData: [],
        autoCompleteData: []
      }
    },
    methods: {
      loadStockData () {
        axios.get(this.$root.$refs.app.serverURL + '/get_stock_list').then((response) => {
            if (response.data.error === false) {
                this.autoCompleteData = response.data.data
            } else {
                this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
            }
        })
      },
      loadData() {
          this.$root.$refs.app.showLoadingPage()
          axios.get(this.$root.$refs.app.serverURL + '/stock?_token=' + this.$root.$refs.app.token ).then((response) => {
              this.$root.$refs.app.closeLoadingPage()
              if ( response.data.error === false ) {
                  this.data = response.data.data
                  this.searchBtn()
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
        this.$router.push( { path: '/stock/' + this.$refs.BasicList.id } )
      },
      addLink() {
        this.$router.push( { path: '/stock/create_stock' } )
      },
      searchBtn() {
        let keyword, data
        keyword = this.$refs.BasicList.$refs.autoCompleteData.getResult().toString()
        data = this.data
        this.displayData = []
        if (keyword.length > 0) {
          for( let i in data ) {
            let code = data[i].code.toString()
            if ( code.indexOf( keyword ) > -1 || data[i].name.indexOf( keyword ) > -1 ) {
              this.displayData.push( data[i] )
            }
          }
        }
      },
      getDataBtn() {
        let code, startDate, endDate, formatStartDate, formatEndDate, startMonth, endMonth

        code = this.$refs.BasicList.$refs.autoCompleteData.getResult()

        startDate = this.$refs.BasicList.selectedDate.start
        endDate = this.$refs.BasicList.selectedDate.end
        startMonth = parseInt( startDate.getMonth() ) + 1
        endMonth = parseInt( endDate.getMonth() ) + 1
        formatStartDate = startDate.getFullYear() + '/' + startMonth + '/' + startDate.getDate()
        formatEndDate = endDate.getFullYear() + '/' + endMonth + '/' + endDate.getDate()
        this.$root.$refs.app.showLoadingPage()
        axios.get(this.$root.$refs.app.serverURL + '/get_data?code='+ code +'&_token=' + this.$root.$refs.app.token + '&s=' + formatStartDate + '&e=' + formatEndDate ).then((response) => {
            this.$root.$refs.app.closeLoadingPage()
            this.$root.$refs.app.$refs.SystemMessage.showModal( 1, 'done' )
            // if ( response.data.error === false ) {
            //     this.$root.$refs.app.$refs.SystemMessage.showModal( 3, 'done' )
            // } else {
            //     this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
            //     this.$router.push( { path: '/login' } )
            // }
        })
      },
      countDataBtn() {
        let code = this.$refs.BasicList.code
        this.$root.$refs.app.showLoadingPage()
        axios.get(this.$root.$refs.app.serverURL + '/count_data?code='+ code +'&_token=' + this.$root.$refs.app.token ).then((response) => {
            this.$root.$refs.app.closeLoadingPage()
            this.$root.$refs.app.$refs.SystemMessage.showModal( 1, 'done' )
            this.loadData()
            // if ( response.data.error === false ) {
            //     this.$root.$refs.app.$refs.SystemMessage.showModal( 3, 'done' )
            // } else {
            //     this.$root.$refs.app.$refs.SystemMessage.showModal( 2, response.data.msg )
            //     this.$router.push( { path: '/login' } )
            // }
        })
      }
    }
  };
</script>
