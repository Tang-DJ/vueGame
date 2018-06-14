<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">百万答题</el-col>
    </el-row>
    <el-button @click="onLogin">登录</el-button>
    <el-button @click="onRegister">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    onLogin () {

      this.$router.push({path:'/Login'})
    },
    onRegister () {

    }
  }
}
</script>

<style scoped>

</style>
