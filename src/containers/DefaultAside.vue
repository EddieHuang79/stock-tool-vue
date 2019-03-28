<template>
  <b-tabs>
    <b-tab>
      <template slot="title">
        <i class='icon-list'></i>
      </template>
      <b-list-group class="list-group-accent">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          今日訂單
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-warning list-group-item-divider">
          <!--
          <div class="avatar float-right">
            <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
          </div>
          -->
          <div>
            <strong>沈啊兜</strong>
          </div>
          <small class="text-muted mr-3">
            <i class="icon-calendar"></i>&nbsp;&nbsp;15:00 入住
          </small>
          <small class="text-muted">
            <i class="icon-location-pin"></i>&nbsp;&nbsp;經濟1號房
          </small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-info">
          <!--
          <div class="avatar float-right">
            <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
          </div>
          -->
          <div>
            <strong>尼可拉斯凱吉</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;17:00 入住</small>
          <small class="text-muted"><i class="icon-location-pin"></i>&nbsp;&nbsp;奢華2號房</small>
        </b-list-group-item>
        <hr class="transparent mx-3 my-0">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          明日訂單
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-danger list-group-item-divider">
          <div>
            <strong>尚無訂單</strong>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-tab>
<!--     
    <b-tab>
      <template slot="title">
        <i class='icon-speech'></i>
      </template>
      <div class="p-3">
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="success" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="danger" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="info" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="warning" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="dark" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
      </div>
    </b-tab>
    <b-tab>
      <template slot="title">
        <i class='icon-settings'></i>
      </template>
      <div class="p-3">
        <h6>Settings</h6>
        <div class="aside-options">
          <div class="clearfix mt-4">
            <small><b>Option 1</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 2</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 3</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" disabled defaultChecked/>
          </div>
          <div>
            <small class="text-muted">Disabled option.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 4</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
        </div>
        <hr>
        <h6>System Utilization</h6>
        <div class="text-uppercase mb-1 mt-4">
          <small><b>CPU Usage</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="info" :value="25"></b-progress>
        <small class="text-muted">348 Processes. 1/4 Cores.</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Memory Usage</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="warning" :value="70"></b-progress>
        <small class="text-muted">11444GB/16384MB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 1 Usage</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="danger" :value="95"></b-progress>
        <small class="text-muted">243GB/256GB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 2 Usage</b></small>
        </div>
        <b-progress height={} class="progress-xs" variant="success" :value="10"></b-progress>
        <small class="text-muted">25GB/256GB</small>
      </div>
    </b-tab> -->
  </b-tabs>
</template>

<script>
import { Switch as cSwitch } from '@coreui/vue'
export default {
  name: 'DefaultAside',
  components: {
    cSwitch
  }
}
</script>
