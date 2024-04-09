<script setup lang="ts">
import {ElButton} from 'element-plus'
import { ref } from "vue";
import MyModal from "../examples/MyModal.vue";
let open = ref(false);

</script>
<template>
  <el-button @click="open = true">打开Modal</el-button>
  <MyModal v-model:open="open" title="新增" @on-cancel="open = false">
    <div>自定义内容</div>
  </MyModal>
</template>
