<template>
  <div style="padding: 10px">
    <span style="margin-left: -10px; font-weight: bold;">sso support: </span>
    <p>具体说明可以参考链接 <a href="http://wiki.cestc.cn:8884/pages/viewpage.action?pageId=41958716" target="_blank" style="color: blue; text-decoration: underline">sso 说明</a></p>
    <p>原理图:</p>
    <img src="@/assets/demo/sso.png" width="300" alt="" srcset="">
    <p>一个示例:</p>
    <div class="dashboard-text"><button @click="checkAuth">check auth(sso) - 401</button></div>
    <div class="dashboard-text"><button @click="setCookie">setCookie</button></div>
  </div>
</template>

<script>
export default {
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
