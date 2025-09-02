<template>
  <ProductMenu class="product-menu" :class="{ 'hidden': showOrderPage }" />

  <Order 
    class="order-page" 
    :class="{'expanded': showOrderPage}" 
    :showOrderPage="showOrderPage"
    @update:updateShowOrderPage="updateShowOrderPage"
  />

  <Button 
    @click="showOrdersAndPay"
    :btnName="btnName"
    class="order-button" 
    :class="{'show-btn': productStore.selectedProducts.length > 0}" 
  />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useProductStore } from '@/stores/product'
import ProductMenu from '@/components/ProductMenu.vue'
import Order from '@/components/Order.vue'
import Button from '@/components/OrderButton.vue'

const productStore = useProductStore()
const showOrderPage = ref(false)

const btnName = computed(() => {
  if (!showOrderPage.value) {
    return 'VIEW ORDER'
  }

  const totalPrice = productStore.selectedProducts.reduce((acc, item) => {
    return acc + item.price * item.count
  }, 0)

  return `PAY ${totalPrice} ₸`
})

// onMounted(async () => {
//   await productStore.fetchProducts()
// })

function showOrdersAndPay() {
  if (!showOrderPage.value) {
    showOrderPage.value = true
    return
  }
}

function updateShowOrderPage(value) {
  showOrderPage.value = value
}
</script>

<style scoped>
.product-menu {
  max-height: 100%;
  transition: height 0.4s ease;
}
.product-menu.hidden {
  height: 0;
  overflow: hidden;
}

.order-page {
  overflow: hidden;
  height: 0;
  /* transition: all 0.4s ease; */
}
.order-page.expanded {
  height: 100%;
}

.order-button {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
}

.show-btn {
  display: block;
}
</style>
