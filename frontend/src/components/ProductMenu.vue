<template>
  <section>
    <div 
      v-for="product in productStore.products"
      :key="product.id"
      class="product-item" 
      :class="{'selected': selectedProductCount(product.id) > 0}"
    >

      <div 
        class="product-item-counter" 
        :class="{'counter-show': selectedProductCount(product.id) > 0}"
      >{{ selectedProductCount(product.id) }}</div>

      <div class="product-item-photo">
        <img :src="product.img" :alt="product.imgAlt">
        <span class="product-item-new" v-if="product.new">New</span>
      </div>

      <div class="product-item-label">
        <span class="product-item-title">{{ product.name }}</span>
        <span class="product-item-price">{{ product.price }} ₸</span>
      </div>
      
      <div class="product-item-buttons">
        <button 
          @click="productStore.removeFromBasket(product.id)" 
          class="product-item-decr-button button-item ripple-handler"
        >
          <span class="ripple-mask">
            <span class="ripple"></span>
          </span>
        </button>

        <button 
          @click="productStore.addToBasket(product.id)" 
          class="product-item-incr-button button-item ripple-handler"
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
import '@/assets/css/product-menu.css'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

function selectedProductCount(productId) {
  const product = productStore.selectedProducts.find(i => i.id === productId)
  return product ? product.count : 0
}
</script>
