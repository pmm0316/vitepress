<template>
  <div class="sticky-container">
    <div class="content1">content</div>
    <div>
      <div class="xi-ding">吸顶栏</div>
      <div class="content2">
        <div>11111</div>
        <div>22222</div>
        <div>33333</div>
      </div>
    </div>
  </div>
</template>
<style>
.sticky-container {
  color: white;
  height: 400px;
  width: 300px;
  overflow-y: auto;
}

.xi-ding {
  position: sticky;
  height: 60px;
  background: rebeccapurple;
  top: 0px;
}

.content1 {
  height: 100px;
  background: salmon;
}

.content2 {
  height: 600px;
  background: darkcyan;
}
</style>
