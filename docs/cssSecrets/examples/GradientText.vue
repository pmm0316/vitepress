;
<template>
  <div class="container">
    <div class="text">渐变色文字</div>
  </div>
</template>
<style scoped>
.text {
  font-size: 25px;
  background-image: linear-gradient(to bottom, #af9f9f, #1793db);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
