<template>
  <div class="container">
    <div class="f-bg f-bg1"></div>
    <div class="f-bg f-bg2"></div>
    <div class="f-bg f-bg3"></div>
    <div class="f-bg f-bg4"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
.f-bg {
  width: 120px;
  height: 100px;
  margin-right: 15px;
}
.f-bg1 {
  background: linear-gradient(#fb3 50%, #58a 50%);
}
.f-bg2 {
  background: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 20px;
}
.f-bg3 {
  background: linear-gradient(to right, #fb3 50%, #58a 50%);
  background-size: 20px 100%;
}
.f-bg4 {
  background: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
}
</style>
