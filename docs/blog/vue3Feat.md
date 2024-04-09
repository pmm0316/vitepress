## 1. 多个 v-model 和 defineModel

子组件

```vue
<!-- 子组件 -->
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
<!-- 父组件 -->
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

## 2. defineProps defineEmits

子组件通过 defineProps 接收父组件传值，通过 defineEmits 触发方法

```vue
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
const emit = defineEmits<{
  (e: "change", title: string): void;
  (e: "update", value: string): void;
}>();
const handleChange = () => {
  // 触发方法，改变父组件传入的值
  emit("change", "newTitle");
};
</script>
```

## 3. withDefaults 默认值

使用场景：给子组件传值时，对传入 props 的值设置默认值。

```vue
<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
const props = withDefaults(defineProps<{ title?: string }>(), {
  title: "标题", // 默认值【标题】
});
</script>
```

## 4. ref 和 reactive

查看 ref 方法的源码：

```javascript
export declare function ref<T>(value: T): Ref<UnwrapRef<T>>;
export declare function ref<T = any>(): Ref<T | undefined>;
```

一个响应的可变 ref 对象，它只有一个属性'.value '指向内部值。<br>
如果将一个对象赋值给 ref，那么这个对象将通过 <span style="color: #42b883;"><strong>reactive()</strong></span> 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。<br>

若要避免这种深层次的转换，请使用 <span style="color: #42b883;"><strong>shallowRef()</strong></span> 来替代。

```vue
<script setup lang="ts">
import { ref } from "vue";
let number = ref(1);
</script>
```

查看 reactive 方法的源码：

```javascript
export declare function reactive<T extends object>(target: T): UnwrapNestedRefs<T>;
```

从源码中发现 reactive 只能传 object 类型

```vue
<script setup lang="ts">
import { reactive } from "vue";
const person = reactive({ name: "Tom" });
</script>
```

```js

```

## 5. 自定义 hooks

在 hooks 目录定义 mouse.js 的 hook

```js
// mouse.js
import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });
  return { x, y };
}
```

使用 hooks

```vue
<script setup lang="ts">
import { useMouse } from "../../hooks/mouse.js";

const { x, y } = useMouse();

console.log("x, y", x, y);
</script>
<template>
  <div>x {{ x }}, y {{ y }}</div>
</template>
<style scoped></style>
```
