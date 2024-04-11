<template>
  <div class="container">
    <div class="triangle triangle1"></div>
    <div class="triangle triangle2"></div>
    <div class="triangle triangle3"></div>
    <div class="triangle triangle4"></div>
  </div>
</template>
<style scoped>
.triangle {
  height: 0;
  width: 0;
  display: inline-block;
}
.triangle1 {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid forestgreen;
}
.triangle2 {
  border-left: 10px solid transparent;
  border-right: 10px solid forestgreen;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
}
.triangle3 {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid forestgreen;
  border-bottom: 10px solid transparent;
}
.triangle4 {
  border-left: 10px solid forestgreen;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
</style>
