<script setup lang="ts">
import { ElButton } from "element-plus";

function throttle(fn, delay, immediate = true) {
  let timer: number | null = null;
  let flag = true;
  return function () {
    if (timer) return;
    if (immediate && flag) {
      fn.apply(this, arguments);
      flag = false;
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const handleClick = throttle(() => {
  console.log("handleClick");
}, 1000);
</script>
<template>
  <ElButton @click="handleClick">按钮</ElButton>
</template>
