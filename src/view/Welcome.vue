<template>
  <div>
    <back></back>
    <div>
      欢迎登录百万答题界面
    </div>
    <el-button>开始答题</el-button>
    <el-button @click="onPersonal">个人信息</el-button>
  </div>
</template>

<script>
import Back from "../components/back"
export default {
  name: 'Welcome',
  components: {Back},
  methods: {
    onPersonal () {
      this.$router.push({path: '/Personal'})
    }
  }
}
</script>

<style scoped>

</style>
