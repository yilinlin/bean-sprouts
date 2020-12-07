<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roll your code here ~ by cecloud-fe</div>

    <div style="padding: 10px">
      <span style="margin-left: -10px">sso support: </span>
      <div class="dashboard-text"><button @click="checkAuth">check auth(sso) - 401</button></div>
      <div class="dashboard-text"><button @click="setCookie">setCookie</button></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    checkAuth() {
      this.$store.dispatch('user/auth')
    },
    setCookie() {
      this.$router.push({ path: '/ssologin#access_token=123' })
    }
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
