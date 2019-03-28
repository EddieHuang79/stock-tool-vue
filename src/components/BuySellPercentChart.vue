<template>
  <highcharts :constructor-type="'stockChart'" :options="stockOptions"></highcharts>
</template>
<script>

export default {
  name: 'BuySellPercentChart',
  data: function () {
    return {
      stockOptions: {

        chart: {
            width: 1150,
            height: 600
        },

        colors: ['#1E7B52', '#2f7ed8', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],

        title: {
            text: ''
        },

        subtitle: {
            text: '近半年'
        },

        rangeSelector: {
            buttons: [{
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 1,
            inputEnabled: false
        },

        tooltip: {
            split: true
        },

        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '',
                rotation: 270
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '',
                rotation: 270
            },
            top: '65%',
            height: '35%',
            min: 0.00,
            max: 2.00,
        }],

        series: [{ 
            type: 'candlestick',
            name: '股價',
            data: [],
            dataGrouping: {
                  units: [[
                      'week',
                      [1]
                  ], [
                      'month',
                      [1, 2, 3, 4, 6]
                  ]]
                },
                tooltip: {
                    valueDecimals: 2
                },
                upColor: 'red'
            }, {
                type: 'line',
                name: '買賣壓力道比例',
                data: [],
                yAxis: 1,
                dataGrouping: {
                  units: [[
                      'week',
                      [1]
                  ], [
                      'month',
                      [1, 2, 3, 4, 6]
                  ]]
                },
                marker: {
                    enabled: true
                }
        }]

      }


    }
  },
  methods: {
    setTitle(data) {
      this.stockOptions.title.text = data.code + ' - ' + data.name
    },
    setData(data) {
      this.stockOptions.series[0].data = data.stock
      this.stockOptions.series[1].data = data.result
      this.stockOptions.chart.width = document.getElementById("SellPercentReport").offsetWidth * 0.9
    }
  }
}

</script>

<style type='text/css' >
  .highcharts-point-up{
    background-color: #FF0000;
  }
</style>


