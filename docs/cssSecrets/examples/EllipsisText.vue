<template>
  <div class="container">
    <div class="text-wrapper">
      <span>省略号在后面：</span>
      <p class="long-text">sdfsdfdsf的事发生范德萨的身份我让他和</p>
    </div>
    <div class="text-wrapper">
      <span>省略号在前面：</span>
      <p class="long-text2">sdfsdfdsf的事发生范德萨的身份我_让他和</p>
    </div>
  </div>
</template>
<style scoped>
.text-wrapper {
  display: flex;
  align-items: center;
}
p {
  /* 默认省略号在后端 */
  text-overflow: ellipsis;
  overflow: hidden;
  text-wrap: nowrap;
  width: 180px;
  font-size: 20px;
}
/* 省略号在前面 */
.long-text2 {
  direction: rtl;
}
</style>
