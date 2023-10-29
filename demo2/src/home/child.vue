<template>
  <div>
    <button @click="$router.back()">返回上一页</button>
    <micro-app name="page1" :url="config.url" :baseroute="'/child'"></micro-app>
  </div>
</template>
<script>
import { config } from 'vue/types/umd'

export default {
  name: 'child',
  data() {
    return {
      config: { url: 'http://localhost:8081/' }
    }
  },
  computed: {
    id() {
      return this.$route.query.id
    }
  },
  created() {
    if (this.id) {
      this.config = this.getConfig(this.id)
    }
  },
  mounted() {
  },
  methods: {
    // 此处远程获取配置
    getConfig() { }
  },
}
</script>
<style lang="less" scoped></style>
