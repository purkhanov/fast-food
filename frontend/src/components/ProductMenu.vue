<template>
  <section class="cafe-page cafe-items" style="max-height: 100%;">
    <div 
      v-for="product in productStore.products"
      :key="product.id"
      class="cafe-item" 
      :class="{'selected': selectedProductCount(product.id) > 0}"
    >

      <div 
        class="cafe-item-counter" 
        :class="{'counter-show': selectedProductCount(product.id) > 0}"
      >{{ selectedProductCount(product.id) }}</div>

      <div class="cafe-item-photo">
        <img :src="product.img" :alt="product.imgAlt">
        <span class="cafe-item-new" v-if="product.new">New</span>
      </div>

      <div class="cafe-item-label">
        <span class="cafe-item-title">{{ product.name }}</span>
        <span class="cafe-item-price">{{ product.price }} ₸</span>
      </div>
      
      <div class="cafe-item-buttons">
        <button 
          @click="productStore.removeFromBasket(product.id)" 
          class="cafe-item-decr-button button-item ripple-handler"
        >
          <span class="ripple-mask">
            <span class="ripple"></span>
          </span>
        </button>

        <button 
          @click="productStore.addToBasket(product.id)" 
          class="cafe-item-incr-button button-item ripple-handler"
        >
          <span class="button-item-label">ADD</span>
          <span class="ripple-mask">
            <span class="ripple"></span>
          </span>
        </button>

      </div>
    </div>
  </section>
</template>

<script setup>
import '@/assets/css/menu-item.css'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'

const productStore = useProductStore()

function selectedProductCount(productId) {
  const product = productStore.selectedProducts.find(i => i.id === productId)
  return product ? product.count : 0
}

</script>

<style scoped>
.cafe-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: 0 auto;
  max-width: 480px;
  transition: max-height var(--page-animation), opacity var(--page-animation);
  background-color: var(--block-bg-color);
}
body.order-mode .cafe-items {
  max-height: 0 !important;
  opacity: 0 !important;
}
</style>
