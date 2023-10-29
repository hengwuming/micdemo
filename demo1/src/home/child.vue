<template>
  <div>
    <button @click="$router.back()">返回上一页</button>
    <micro-app
      name="page1"
      url="http://localhost:8081/"
      :baseroute="'/child'"
    ></micro-app>
  </div>
</template>
<script>
export default {
  name: 'child',
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
