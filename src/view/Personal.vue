<template>
  <div>
    <back></back>
    <h1>个人信息</h1>
    <el-form>
      <el-form-item label="账号">
        <el-input>xx</el-input>
      </el-form-item>
      <el-form-item label="答题数">
        <el-input-number>123</el-input-number>
      </el-form-item>
      <el-form-item label="答题成功率">
        <el-input>xx</el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Back from '../components/back'
export default {
  name: 'Personal',
  components: {Back}
}
</script>

<style scoped>

</style>
