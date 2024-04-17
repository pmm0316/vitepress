<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { ElIcon } from "element-plus";
import { ArrowDownBold } from "@element-plus/icons-vue";

const props = withDefaults(
  defineProps<{ direction?: "up" | "down" | "left" | "right" }>(),
  {
    direction: "down", // 方向
  }
);

const iconArr = ["icon1", "icon2", "icon3", "icon4"];
</script>
<template>
  <div :class="['arrow-container', `${props.direction}-arrow-container`]">
    <ElIcon :class="[val]" v-for="val in iconArr" :key="val"
      ><ArrowDownBold
    /></ElIcon>
  </div>
</template>

<style lang="scss" scoped>
.arrow-container {
  display: inline-flex;
  flex-direction: column;
  .el-icon {
    font-size: 20px;
    animation: arrow-animation 1s linear infinite;
  }
  .icon1 {
    animation-delay: 0s;
  }
  .icon2 {
    animation-delay: 1.2s;
  }
  .icon3 {
    animation-delay: 2.4s;
  }
  .icon4 {
    animation-delay: 3.6s;
  }
  &.left-arrow-container {
    flex-direction: row-reverse;
    .el-icon {
      transform: rotate(90deg);
    }
  }
  &.up-arrow-container {
    flex-direction: column-reverse;
    .el-icon {
      transform: rotate(180deg);
    }
  }
  &.right-arrow-container {
    flex-direction: row;
    .el-icon {
      transform: rotate(270deg);
    }
  }
}
@keyframes arrow-animation {
  0% {
    opacity: 0.4;
  }
  33% {
    opacity: 0.75;
  }
  66% {
    opacity: 1;
    color: rgba(24, 238, 120);
  }
  100% {
    opacity: 0.6;
  }
}
</style>
