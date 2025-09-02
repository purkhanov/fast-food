<template>
  <div class="product-item" :class="{'selected': count > 0}">
    <div class="product-item-counter" :class="{'counter-show': count > 0}">
      {{ count }}
    </div>

    <div class="product-item-photo">
      <img :src="props.product.img" :alt="props.product.imgAlt">
      <span class="product-item-new" v-if="props.product.new">New</span>
    </div>

    <div class="product-item-label">
      <span class="product-item-title">{{ props.product.name }}</span>
      <span class="product-item-price">{{ props.product.price }} ₸</span>
    </div>
    
    <div class="product-item-buttons">
      <button 
        @click="decrement" 
        class="product-item-decr-button button-item ripple-handler"
      >
        <span class="ripple-mask">
          <span class="ripple"></span>
        </span>
      </button>

      <button 
        @click="increment" 
        class="product-item-incr-button button-item ripple-handler"
      >
        <span class="button-item-label">ADD</span>
        <span class="ripple-mask">
          <span class="ripple"></span>
        </span>
      </button>

    </div>
  </div>
</template>

<script setup>
import '@/assets/css/product-item.css'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'

const productStore = useProductStore()

const count = computed(() => {
  const prod = productStore.basket.find(i => i.id === props.product.id)
  return prod ? prod.count : 0
})

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

function increment() {
  productStore.addToBasket(props.product.id)
}

function decrement() {
  productStore.removeFromBasket(props.product.id)
}
</script>