<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <div class="card">
          <div class="card-header">
            <strong>{{ title }}</strong>
            <b-button v-if="addBtn === true" type="button" size="sm" variant="primary" @click="add"><i class="fa fa-plus"></i> {{ txt.create }}</b-button>
            <b-button type="button" size="sm" variant="danger" @click="back"><i class="fa fa-arrow-left"></i> {{ txt.back }}</b-button>
            <div class="card-header-actions">
              <auto-complete-input ref="autoCompleteData" place-holder="請輸入股票名稱或是代號" :data="autoCompleteData" @searchBtn="search()"/>
            </div>
          </div>
          <div class="card-body">
            <table border="1" class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed">
              <thead>
                <tr>
                  <th v-for="(item, column) in setting" v-if="item.display === true"> <b @click="changeSortColumn(item)"> {{ item.text }} </b> <i class="sort" :class="getSortType(item)" @click="changeSortType()" v-show="isSortable(item)"></i> </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(dataItem, index) in dataWithPage">
                  <th v-for="(headerItem, column) in setting" v-if="headerItem.display === true">
                    <div v-if="headerItem.type === 1">{{ dataItem[column] }}</div>
                    <div v-if="headerItem.type === 2"> <input type="checkbox" :value="dataItem[column]" v-model="isSelect"> </div>
                    <div v-if="headerItem.type === 3"> <div v-for="row in dataItem[column]">{{ row }}</div> </div>
                    <div v-if="headerItem.type === 4"> 
                      <b-button type="button" size="sm" variant="primary" @click="editBtn(dataItem.id)"><i class="fa fa-pencil"></i> {{ txt.EditBtn }}</b-button>
                    </div>
                    <div v-if="headerItem.type === 5">
                        <ul class="auth">
                          <li v-for="row in dataItem[column]"><i class="fa fa-check" style="color: green;"></i> {{ row.name }}</li>
                        </ul>
                    </div>
                    <div v-if="headerItem.type === 6"> 
                      <!-- <a :href="getLink(item)">{{ dataItem[column] }}</a>  -->
                    </div>
                    <div v-if="headerItem.type === 7"> 
                      <v-date-picker mode='range' v-model='selectedDate' is-double-paned show-caps :maxDate="new Date()" :inputProps="inputStyle"></v-date-picker>
                      &nbsp;
                      <b-button type="button" size="sm" variant="primary" @click="getDataBtn( dataItem.code )"><i class="fa fa-plus"></i> {{ txt.getDataBtn }}</b-button>
                      &nbsp;
                      <b-button type="button" size="sm" variant="success" @click="countDataBtn( dataItem.code )"><i class="fa fa-calculator"></i> {{ txt.countDataBtn }}</b-button>
                    </div>
                  </th>
                </tr>
                <tr v-if="data.length < 1"><th :colspan="countLength()">{{ txt.FindNothing }}</th></tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <b-pagination align="center" :total-rows="data.length" v-model="currentPage" :per-page="perPage"></b-pagination>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import AutoCompleteInput from '@/components/AutoCompleteInput'
  import { Txt } from '@/tableSchema/WebWord';
  import { setupCalendar, DatePicker } from 'v-calendar'
  import 'v-calendar/lib/v-calendar.min.css'

  setupCalendar({
    firstDayOfWeek: 2 // Monday
  })

  const options = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa', $isDisabled: true },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ]

  const today = new Date()

  export default {
    name: 'basicList',
    components: {
      'v-date-picker': DatePicker,
      AutoCompleteInput
    },
    data () {
      return {
        isSelect: [],
        columnNumber: 0,
        txt: Txt,
        id: 0,
        currentPage: 1,
        perPage: 10,
        sortColumn: 'account',
        sortType: 'desc',
        keyword: '',
        code: '',
        startDate: '',
        endDate: '',
        selected: null,
        options: options,
        selectedDate: {
          start: new Date(today.getFullYear(), today.getMonth() - 5, 1),
          end: new Date(today.getFullYear(), today.getMonth(), today.getDate())
        },
        inputStyle: {
          style: {'max-width': '200px', 'float': 'left'},
          class: 'form-control'
        }
      }
    },
    watch: {
      isSelect: 'selectItem'
    },
    computed: {
      dataWithPage() {
        let start, end, result
        start = 0 + ( this.currentPage - 1 ) * this.perPage
        end = this.currentPage * this.perPage
        result = this.data.slice( start, end )
        result = this.sortData(result)
        return result
      },
      rangeStart: function () { return new Date(this.selectedDate.start).toLocaleDateString() },
      rangeEnd: function () { return new Date(this.selectedDate.end).toLocaleDateString() }
    },
    props: ["title", "setting", "data", "addBtn", "autoCompleteData"],
    methods: {
      selectItem: function () {
        if (this.isSelect.length > 1) {
          this.isSelect = this.isSelect.slice(1, 2)
        }
        this.$parent.isSelect( this.isSelect )
      },
      isDisplay: function (column) {
        return typeof this.setting.listSchema[column] !== 'undefined' ? this.list.listSchema[column].display : false
      },
      typeMatch: function (column, type) {
        return this.setting.listSchema[column].type === type
      },
      countLength: function () {
        return Object.keys( this.setting ).length
      },
      getItemStatus: function (id) {
        let result = ''
        for (let item in this.list.data) {
          if ( this.list.data[item].id === id ) {
            result = this.list.data[item].status
          }
        }
        return result
      },
      setItemStatus: function (id, data) {
        for (let item in this.list.data) {
          if ( this.list.data[item].id === id ) {
            this.list.data[item].status = data
            $("#basicList").find("[col='status']").eq(item).text(data.name)
          }
        }
      },
      getLink: function (item) {
        return '/' + this.modelName + '/' + item.id
      },
      add() {
        this.$emit('add')
      },
      back() {
        this.$emit('back')
      },
      editBtn(id) {
        this.id = id
        this.$emit('editbtn')
      },
      search() {
        this.$emit('searchBtn')
      },
      getSortType(item) {
        return { 
          'cui-arrow-bottom': this.sortType === 'desc', 
          'cui-arrow-top': this.sortType === 'asc'
        }
      },
      changeSortType() {
        this.sortType = this.sortType === 'desc' ? 'asc' : 'desc'
      },
      isSortable(item) {
        return item.sortable === true && this.sortColumn === item.value
      },
      changeSortColumn(item) {
        if ( item.sortable === true ) {
          this.sortColumn = item.value
          this.sortType = 'desc'
        }
      },
      sortData(data) {
        let result = data.sort(function (a, b) {
                       return a[this.sortColumn] > b[this.sortColumn] ? 1 : -1
                      }.bind(this))
            result = this.sortType === 'desc' ? result.reverse() : result
        return result
      },
      getDataBtn(code) {
        this.code = code
        this.$emit('getDataBtn')
      },
      countDataBtn(code) {
        this.code = code
        this.$emit('countDataBtn')
      }
    }
  }
</script>

<style type="text/css">
  ul.auth {
    list-style-type: none;
    padding: 0;
    overflow: auto;
    width: 300px;
  }
  ul.auth li {
    float: left;
    margin-left: 10px;
  }
  .sort{
    cursor: pointer;
  }
  .sort:hover{
    color: #000;
    font-weight: bold;
  }
  b {
    cursor: pointer;
  }
</style>

