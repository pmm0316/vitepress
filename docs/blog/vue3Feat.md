## 1. 多个 v-model 和 defineModel

子组件

```vue
<template>
  <el-input v-model="text" />
  <el-input v-model="value" />
</template>
<script setup lang="ts">
import { defineModel } from "vue";
const text = defineModel("text", {
  default: "",
  type: String,
  required: false,
});
const value = defineModel("value");
</script>
```

父组件

```vue
<script setup lang="ts">
import { ref } from "vue";
import ChildCom from "./ChildCom.vue";
let text = ref();
let value = ref();
</script>
<template>
  <div>
    <ChildCom v-model:text="text" v-model:value="value" />
  </div>
</template>
```

## 2. defineProps

defineProps 接收父组件传值

```vue
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
```
