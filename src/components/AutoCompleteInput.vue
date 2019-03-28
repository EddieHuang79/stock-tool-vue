<template>
  <div>
    <b-input-group>
      <b-form-input type="text" v-model="keyword" @keyup="search" :placeholder="placeHolder" style="width: 180px;"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" @click="search"><i class="fa fa-search"></i>{{ txt.search }}</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-list-group v-if="keyword.length > 0 && displayList === true">
      <b-list-group-item v-if="data.length > 0" v-for="(item, key) in DisplayData" @click="choose(item)" :style="getTop(key)" :key="key"> {{ item.text }} </b-list-group-item>
      <b-list-group-item v-if="data.length < 1"> No Data </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { Txt } from '@/tableSchema/WebWord';

export default {
  name: 'autoComplete',
  props: ["data", "placeHolder"],
  data() {
    return {
      keyword: '',
      value: '',
      DisplayData: [],
      displayList: false,
      txt: Txt,
      max: 10
    }
  },
  methods: {
    init() {
      this.keyword = ''
      this.value = ''
      this.resetList()
    },
    resetList() {
      this.DisplayData = []
      this.displayList = false
    },
    search() {
      let data, keyword, max
      keyword = this.keyword
      data = this.data
      max = this.max - 2
      this.DisplayData = []
      if ( this.keyword.length > 0 ) {
        this.displayList = true
        for( let i in data ) {
          let text = data[i].text
          if ( text.indexOf( keyword ) > -1  ) {
            this.DisplayData.push( data[i] )
          }
          if ( this.DisplayData.length > max ) {
            break
          }
        }
      }
    },
    choose(item) {
      this.keyword = item.text
      this.value = item.value
      this.resetList()
      this.$emit('searchBtn')
    },
    getResult() {
      return this.value
    },
    getTop(key) {
      return {
       top: 173 + 47 * key + 'px' 
     }
    }
  }
}

</script>

<style type='text/css'>
  .list-group-item {
    width: 180px;
    position: fixed;
    z-index: 1;
  }
  .list-group-item:hover{
    z-index: 2;
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8;
    cursor: pointer;
  }
</style>
