<template>
  <div>
    <back></back>
    <div>欢迎登录百万答题</div>
    <el-form :model="loginForm" :rules="rules">
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="remember">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </el-form-item>
      <el-button @click="onLogin">登录</el-button>
    </el-form>

  </div>
</template>

<script>
import Back from '../components/back'
export default {
  name: 'Login',
  components: {Back},
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入用户账号', trigger: 'blur'}
        ],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]

      }
    }
  },
  methods: {
    onLogin () {
      this.$router.push('/Welcome')
    }
  }
}
</script>

<style scoped>

</style>
