<template>
  <div>
    <div class="login">

      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </div>
    <el-row type="flex" class="row-bg" justify="center" style="height: 20px;width: 100%">
      <el-col :span="6"><div class="grid-content bg-purple">234</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">234</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div>4234</el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
