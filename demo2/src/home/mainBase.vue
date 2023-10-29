<template>
  <div>
'我是基座'
<button @click="$router.push({path:'/child',query:{id:11}})">跳转子路由</button>
  </div>
</template>
<script>
export default {
  name: 'mainBase',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>

</style>
