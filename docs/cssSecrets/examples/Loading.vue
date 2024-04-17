<script setup lang="ts"></script>
<template>
  <div class="loading"></div>
</template>

<style lang="scss" scoped>
.loading {
  border: 4px solid rgba(0, 0, 0, 0.1); // 设置所有边框颜色
  border-top: 4px solid #3498db; /* 设置上边框颜色 */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
