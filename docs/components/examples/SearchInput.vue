<script setup lang="ts">
import { ref } from "vue";
import { ElCol, ElInput, ElRow } from "element-plus";

const searchVal = ref("");
const searchVal2 = ref("");
const changeCount = ref(0);
const changeCount2 = ref(0);

function debounce(fn, delay) {
  let timer: number | null = null;
  return function () {
    const args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

const handleInput = () => {
  console.log("handleChange", searchVal.value);
  changeCount.value += 1;
};

const handleInput2 = debounce((event) => {
  console.log("handleChange2", searchVal2.value);
  changeCount2.value += 1;
}, 1000);
</script>
<template>
  <ElRow :gutter="15">
    <ElCol :span="12">
      <div>
        <div>触发次数：{{ changeCount }}</div>
        <ElInput
          v-model="searchVal"
          @input="handleInput"
          placeholder="不使用防抖搜索"
        />
      </div>
    </ElCol>
    <ElCol :span="12">
      <div>
        <div>触发次数：{{ changeCount2 }}</div>
        <ElInput
          v-model="searchVal2"
          @input="handleInput2"
          placeholder="使用防抖搜索"
        />
      </div>
    </ElCol>
  </ElRow>
</template>
