<template>
  <div class="container">
    <div class="box">
      <div class="inner-box">2个div实现</div>
    </div>
    <div class="box2">1个div实现</div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
.box {
  padding: 0.8em;
  background: #655;
  margin-right: 20px;
}
.inner-box {
  padding: 1em;
  border-radius: 0.8em;
  background: tan;
}
.box2 {
  padding: 0.8em;
  background: tan;
  border-radius: 0.8em;
  outline: 0.8em solid #655;
}

</style>
