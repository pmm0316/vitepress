<script setup lang="ts">
import { ElButton } from "element-plus";

function throttle(fn, delay, immediate = true) {
  let timer: number | null = null;
  let flag = true;
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate && flag) {
      fn.apply(this, arguments);
      flag = false;
    }
    if (!immediate) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

const handleClick = throttle(() => {
  console.log("handleClick");
}, 2000);
</script>
<template>
  <div></div>
  <ElButton @click="handleClick">按钮</ElButton>
</template>
