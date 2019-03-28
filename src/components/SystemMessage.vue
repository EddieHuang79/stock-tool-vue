<template>
  <div class="wrapper">
    <b-modal :title="txt.SystemMessage" :class="getClass()" v-model="display" @ok="display = false" :okOnly="true" :okTitle="txt.sure">{{ msg }}</b-modal>
  </div>
</template>

<script>
import { Txt } from '@/tableSchema/WebWord';
export default {
  name: 'SystemMessage',
  data () {
    return {
      display: false,
      msg: '',
      type: 2,
      txt: Txt
    }
  },
  methods: {
    showModal( type, msg  ) {
      this.type = parseInt(type)
      this.msg = msg
      this.display = true
    },
    hideModal() {
      this.display = false
      this.type = 2
      this.msg = ''
    },
    getClass() {
      let type = parseInt(this.type)
      return {
        'modal-success': type === 1,
        'modal-warning': type === 2,
        'modal-danger': type === 3,
        'modal-info': type === 4,
        'modal-primary': type === 5
      }
    }
  }
}
</script>
