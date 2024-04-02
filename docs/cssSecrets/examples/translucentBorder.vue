<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  width: 150px;
  height: 150px;
  background: url("../../public/墙壁.jpg") no-repeat 100% 100%;
}
.box {
  border: 10px solid rgba(255, 255, 255, 0.4);
  width: 100px;
  height: 100px;
  background: white;
  background-clip: padding-box;
}
</style>
