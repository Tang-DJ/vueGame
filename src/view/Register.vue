<template>
  <div>
    <back></back>
    <div>欢迎登录百万答题</div>
    <el-form :model="loginForm" :rules="rules" label-position="right">
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="loginForm.checkPass"></el-input>
      </el-form-item>
      <el-button type="primary">注册</el-button>
    </el-form>

  </div>
</template>

<script>
import Back from '../components/back'
export default {
  name: 'Register',
  components: {Back},
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {

      loginForm: {
        account: '',
        password: '',
        checkPass: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入用户账号', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3-10个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
