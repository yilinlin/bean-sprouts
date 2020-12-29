<template>
  <div>
    <button @click="asyncLoad('Comp1')">load component 1</button>
    <button @click="asyncLoad('Comp2')">load component 2</button>
    <div>
      <async-load-comp :component="asyncComp" />
    </div>
  </div>
</template>

<script>
import AsyncLoadComp from '@/components/AsyncLoadComp'
import config from '@/views/demo/async/async-config'
export default {
  components: {
    AsyncLoadComp
  },
  data() {
    return {
      asyncComp: () => import('@/views/demo/async/components/Comp1')
    }
  },
  methods: {
    asyncLoad(name) {
      console.log('name is ', name)
      this.asyncComp = config[name]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
