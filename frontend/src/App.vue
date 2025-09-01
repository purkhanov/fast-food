<template>
  <ProductMenu />
  <Button class="order-button" />
</template>

<script setup>
import ProductMenu from './components/ProductMenu.vue'
import Button from './components/OrderButton.vue'
import { onMounted } from 'vue';
import { useProductStore } from './stores/product';

const productStore = useProductStore()

// onMounted(async () => {
//   await productStore.fetchProducts()
// })
</script>

<style scoped>
.order-button {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
