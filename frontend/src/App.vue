<template>
  <Menu />
  <Button class="order-button" />
</template>

<script setup>
import Menu from './components/Menu.vue'
import Button from './components/OrderButton.vue'
</script>

<style scoped>
.order-button {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
