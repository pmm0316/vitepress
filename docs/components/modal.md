## 显示代码

<preview path="./examples/MyModal.vue" title="模态框代码" description="基于vue3的Teleport内置组件封装的模态框"></preview>

## 使用演示

<preview path="./demo/MyModalDemo.vue" title="基础" description="基础弹窗"></preview>

## API

### 属性

| 属性       | 说明         | 类型             | 默认值 |
| ---------- | ------------ | ---------------- | ------ |
| open       | 打开         | boolean          | false  |
| title      | 标题         | string           | -      |
| okText     | 确认按钮文字 | string           | 确认   |
| cancelText | 取消按钮文字 | string           | 取消   |
| width      | 宽度         | string \| number | 416    |

### 事件

| 属性      | 说明         | 回调参数 |
| --------- | ------------ | -------- |
| on-ok     | 点击确认按钮 | ()       |
| on-cancel | 点击取消按钮 | ()       |
