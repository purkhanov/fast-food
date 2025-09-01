<template>
  <ProductMenu />
  <Button class="order-button" />
</template>

<script setup>
import ProductMenu from './components/ProductMenu.vue'
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
