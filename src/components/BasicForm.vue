<template>
  <div class="animated fadeIn">
    <b-row v-if="setting.length > 0">
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>輸入表單</strong>
          </div>
          <b-form>
            <div v-for="(item, index) in setting">
              <b-form-group
                v-if="item.type === 1"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3">
                <b-form-input :id="item.key" :name="item.key" v-model.lazy.trim="$v.data[item.key].$model" type="text" :placeholder="item.placeholder" :state="chkState(item.key)" :aria-describedby="'Feedback' + item.key" autofocus></b-form-input>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>                
              </b-form-group>

              <b-form-group
                v-if="item.type === 2"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3">
                <b-form-select :id="item.key"
                               :plain="true"
                               :options="item.data"
                               v-model="data[item.key]"
                               value="null"
                               :state="chkState(item.key)" 
                               :aria-describedby="'Feedback' + item.key">
                </b-form-select>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>     
              </b-form-group>

              <b-form-group
                v-if="item.type === 3"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3">
                <b-form-radio-group :id="item.key"
                                    :plain="true"
                                    :options="item.data"
                                    checked=""
                                    v-model.lazy.trim="$v.data[item.key].$model"
                                    :state="chkState(item.key)" 
                                    :aria-describedby="'Feedback' + item.key"
                                    inline>
                </b-form-radio-group>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>  
              </b-form-group>

              <b-form-group
                v-if="item.type === 5"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3"
                v-model="data[item.key]">
                <b-form-input plaintext :id="item.key" :name="item.key" :value="item.value" type="text" :state="chkState(item.key)" :aria-describedby="'Feedback' + item.key"></b-form-input>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>                     
              </b-form-group>

              <b-form-group
                v-if="item.type === 6"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3">
                <b-form-checkbox-group inline :id="item.key" :name="item.key" :plain="true" :checked="[]" v-model.lazy.trim="$v.data[item.key].$model" :state="chkState(item.key)" :aria-describedby="'Feedback' + item.key">
                  <b-form-checkbox v-for="(rowItem, rowKey) in dataItem" :value="rowItem.value" :key="rowKey">{{ rowItem.text }}</b-form-checkbox>
                </b-form-checkbox-group>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>     
              </b-form-group>

              <b-form-group
                v-if="item.type === 7"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3">
                <b-form-input :id="item.key" :name="item.key" v-model.lazy.trim="$v.data[item.key].$model" type="password" :placeholder="item.placeholder" :state="chkState(item.key)" :aria-describedby="'Feedback' + item.key" autofocus></b-form-input>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback>  
              </b-form-group>

              <b-form-group
                v-if="item.type === 8"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                v-model="data[item.key]"
                :label-cols="3"
                :state="chkState(item.key)"
                :aria-describedby="'Feedback' + item.key">
                <b-form-file :id="item.key" :plain="true"></b-form-file>
                <b-form-invalid-feedback :id="'Feedback' + item.key">
                  {{ item.desc }}
                </b-form-invalid-feedback> 
              </b-form-group>
            </div>
            <div slot="footer">
              <b-button type="button" size="sm" variant="primary" @click="sendData"><i class="fa fa-dot-circle-o"></i> {{ txt.submit }}</b-button>
              <b-button type="button" size="sm" variant="danger" @click="back"><i class="fa fa-arrow-left"></i> {{ txt.back }}</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <div class="alert alert-danger" v-if="setting.length < 1">{{ txt.notSetting }}</div>
  </div>
</template>

<script>
    import { Txt } from '@/tableSchema/WebWord';

    import { validationMixin } from "vuelidate"
    import { required, minLength, email, integer, helpers } from "vuelidate/lib/validators"
    const strongPass = helpers.regex('strongPass', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)

    export default {
        data: function () {
          return {
            txt: Txt,
            data: {}
          }
        },
        mounted() {
          setTimeout(function(){ 
            this.data = Object.assign({}, this.defaultData)
          }.bind(this), 500)
        },
        computed: {
          isValid() { return !this.$v.data.$anyError },
          isDirty() { return this.$v.data.$anyDirty },
        },
        mixins: [validationMixin],
        validations: {
          data: {
            account: {
              required,
              minLength: minLength(4)
            },
            email: {
              required,
              email
            },
            password: {
              required,
              minLength: minLength(8),
              strongPass
            },
            auth: {
              required,
              minLength: minLength(1)
            },
            status: {
              required,
              integer
            },
            code: {
              required,
              minLength: minLength(4)
            },
            name: {
              required
            }
          }
        },
        props: ["setting", "dataItem", "defaultData"],
        methods: {
          sendData() {
            // if ( this.validate() === true ) {
              this.$emit('senddata')
            // }
          },
          back() {
            this.$router.go(-1)
          },
          chkState(val) {
            const field = this.$v.data[val]
            return !field.$dirty || !field.$invalid
          },
          findFirstError(component = this) {
            if (component.state === false) {
              if (component.$refs.input) {
                component.$refs.input.focus()
                return true
              }
              if (component.$refs.check) {
                component.$refs.check.focus()
                return true
              }
            }
            let focused = false
            component.$children.some((child) => {
              focused = this.findFirstError(child)
              return focused
            })
            return focused
          },
          validate() {
            this.$v.$touch()
            this.$nextTick(() => this.findFirstError())
            return this.isValid
          }
        }
    }
</script>
