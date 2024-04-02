<template>
  <div class="container">
    <div class="ellipse ellipse1"></div>
    <div class="ellipse ellipse2"></div>
    <div class="ellipse ellipse3">4分之一椭圆</div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
.ellipse {
  width: 100px;
  height: 100px;
  background: #fb3;
  margin-right: 15px;
}
.ellipse1 {
  border-radius: 50% / 100% 100% 0 0;
}
.ellipse2 {
  border-radius: 100% 0 0 100%;
}
.ellipse3 {
  border-radius: 100% 0 0 0;
}
</style>
