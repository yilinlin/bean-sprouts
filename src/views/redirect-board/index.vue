<!--  三级目录所需的跳板页 -->
<template>
  <div>
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  name: 'RedirectBoard',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
