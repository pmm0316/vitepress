;
<template>
  <div class="container">
    <div>
      <div class="text-item glow">Glow</div>
      <div class="text-item retro">RETRO</div>
    </div>
  </div>
</template>
<style scoped>
.text-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  font-size: 30px;
  margin-right: 15px;
}
.glow {
  background: #203;
  font-weight: bold;
  color: #ffc;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
.retro {
  background: hsl(0, 50%, 45%);
  color: white;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;
}
</style>
