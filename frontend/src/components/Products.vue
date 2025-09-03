<template>
  <section>
    <ProductItem 
      v-for="product in productStore.products" 
      :key="product.id"
      :product="product" 
    />
  </section>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import ProductItem from '@/components/ProductItem.vue'

const productStore = useProductStore()

</script>

<style scoped>
section {
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: 0 auto;
  max-width: 480px;
  transition: max-height var(--page-animation), opacity var(--page-animation);
  background-color: var(--block-bg-color);
}
</style>