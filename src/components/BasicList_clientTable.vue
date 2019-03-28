<template>
  <div className="animated">
    <b-card>
      <b-card-header>
        <i class="icon-menu mr-1"></i> {{ title }}
        <div class="card-header-actions">
          <b-button v-if="page === 'users'" type="reset" size="sm" variant="primary" to="/users/create_user"><i class="fa fa-plus"></i> {{ txt.CreateAccountBtn }}</b-button>
        </div>
      </b-card-header>
      <b-card-body>
        <v-client-table :columns="columns" :data="data" :options="options" :theme="theme" id="dataTable" :filterable="[]">
          <b-button slot="id" slot-scope="props" type="reset" size="sm" variant="primary" @click="GoTo(props.row.id)"><i class="fa fa-pencil"></i> {{ txt.EditBtn }}</b-button>
        </v-client-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {ClientTable, Event} from 'vue-tables-2'
  import { Txt } from '@/tableSchema/WebWord';

  Vue.use(ClientTable)

  export default {
    name: 'DataTable',
    props: ['title', 'page', 'type', 'setting', 'data'],
    components: {
      ClientTable,
      Event
    },
    created() {
      this.loadData()
    },
    data: function () {
      return {
        txt: Txt,
        columns: [],
        options: {
          headings: {},
          sortable: [],
          filterable: [],
          sortIcon: { base:'fa', up:'fa-sort-asc', down:'fa-sort-desc', is:'fa-sort' },
          pagination: {
            chunk: 5,
            edge: false,
            nav: 'scroll'
          }
        },
        useVuex: false,
        theme: 'bootstrap4',
        template: 'default'
      }
    },
    methods: {
      loadData() {
          this.columns = this.setting.display
          this.options.headings = this.setting.headings
          this.options.sortable = this.setting.sortable
          this.options.filterable = this.setting.filterable
      },
      GoTo(id) {
        this.$router.push( { path: this.page + '/' + id } )
      }
    }
  };
</script>

<style lang="scss">
  #dataTable {
    width: 95%;
    margin: 0 auto;

    .VuePagination {
      text-align: center;
      justify-content: center;
    }

    .vue-title {
      text-align: center ;
      margin-bottom: 10px;
    }

    .VueTables__search-field {
      display: flex;
    }
    .VueTables__search-field input {
      margin-left: 0.25rem;
    }

    .VueTables__limit-field {
      display: flex;
    }

    .VueTables__limit-field select {
      margin-left: 0.25rem !important;
    }

    .VueTables__table th {
      text-align: center;
    }

    .VueTables__child-row-toggler {
      width: 16px;
      height: 16px;
      line-height: 16px;
      display: block;
      margin: auto;
      text-align: center;
    }

    .VueTables__child-row-toggler--closed::before {
      content: "+";
    }

    .VueTables__child-row-toggler--open::before {
      content: "-";
    }
  }

</style>
