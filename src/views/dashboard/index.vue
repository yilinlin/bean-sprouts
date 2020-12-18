<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ username }}</div>
    <div class="dashboard-text">roll your code here ~ by cecloud-fe</div>

    <br>
    <br>
    <div>一些示例模板</div>
    <p style="text-decoration: underline">
      <router-link to="/demo/sso">
        1. sso
      </router-link>
    </p>
    <p style="text-decoration: underline">
      <router-link to="/demo/list1">
        2. table list
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'username'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 14px;
  }
}
</style>
