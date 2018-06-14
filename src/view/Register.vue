<template>
  <div>
    <div>欢迎登录百万答题</div>
    <el-form :model="loginForm" :rules="rules">
      <el-form-item label="账号">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
      <el-input type="password" v-model="loginForm.checkPass"></el-input>
      </el-form-item>
      <el-button>注册</el-button>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
