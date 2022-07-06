<script setup lang="ts">
import { ElMessageBox } from "element-plus";

const test = () => {
  ElMessageBox({message: "hello"});
};
</script>

<template>
  <el-config-provider namespace="my-namespace">
    <el-container>
      <el-main>
        <el-button type="primary" @click="test">click me</el-button>
      </el-main>
    </el-container>
  </el-config-provider>
</template>
<style lang="scss" scoped></style>
