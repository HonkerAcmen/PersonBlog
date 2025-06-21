<template>
  <div class="content">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  height: auto;
  width: 500px;
  .left {
    display: flex;
    flex-direction: column;
  }
  .right {
    display: flex;
    flex-direction: row;
  }
}
</style>
