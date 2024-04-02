<template>
  <div class="container">
    <div class="parallelogram parallelogram1"></div>
    <div class="parallelogram parallelogram2">
      <span>btn</span>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  padding: 0 20px;
}
.parallelogram {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: #fb3;
  margin-right: 25px;
  transform: skew(-30deg);
}
.parallelogram2 span {
  font-size: 20px;
  color: #fff;
  transform: skew(30deg);
}
</style>