<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 100px;
  background: #58a;
  background: linear-gradient(135deg, transparent 10px, #58a 0) top left,
    linear-gradient(-135deg, transparent 10px, #58a 0) top right,
    linear-gradient(-45deg, transparent 10px, #58a 0) bottom right,
    linear-gradient(45deg, transparent 10px, #58a 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>
