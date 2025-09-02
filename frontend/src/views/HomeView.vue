<template>
  <section>
    <ProductItem 
      v-for="product in productStore.products" 
      :key="product.id"
      :product="product" 
    />
  </section>

  <OrderButton
    class="order-button" 
    :class="{'show-btn': productStore.basket.length > 0}" 
    @click="routeTo"
  />
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import ProductItem from '@/components/ProductItem.vue'
import OrderButton from '@/components/OrderButton.vue'
import router from '@/router'

const productStore = useProductStore()

function routeTo() {
  router.push('/order')
}
</script>

<style scoped>
section {
  /* max-height: 100%; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: 0 auto;
  max-width: 480px;
  transition: max-height var(--page-animation), opacity var(--page-animation);
  background-color: var(--block-bg-color);
}

.order-button {
  position: absolute;
  bottom: -65px;
  right: 0;
  left: 0;
  opacity: 0;

  transition: all 0.3s ease;
}

.show-btn {
  bottom: 0;
  opacity: 1;
}
</style>