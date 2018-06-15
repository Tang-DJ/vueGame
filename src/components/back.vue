<template>
    <el-button @click="back">返回</el-button>
</template>

<script>
    export default {
      name: "back",
      methods: {
        back () {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>

</style>
