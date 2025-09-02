<template>
  <section class="order-overview">
    <div class="order-block">
      <div class="order-header-wrap">
        <h2 class="order-header">Your Order</h2>
        <span @click="edit" class="order-edit">Edit</span>
      </div>

      <OrderItem 
        v-for="item in productStore.basket" 
        :key="item.id" 
        :product="item"
      />

      <div class="text-field-wrap">
        <textarea 
          class="text-field" 
          rows="1" 
          placeholder="Add comment…" 
          style=""
        ></textarea>
        <div class="text-field-hint">
          Any special requests, details, final wishes etc.
        </div>
      </div>
    </div>
  </section>

  <OrderButton
    class="order-button" 
    :class="{'show-btn': productStore.basket.length > 0}" 
    @click="pay"
    :button-text="btnText"
  />

</template>

<script setup>
import '@/assets/css/order-view.css'
import { computed } from 'vue'
import { useProductStore } from '@/stores/product'
import OrderItem from '@/components/OrderItem.vue'
import OrderButton from '@/components/OrderButton.vue'

const productStore = useProductStore()
const btnText = computed(() => {
  const total = productStore.basket.reduce((acc, i) => acc + i.price * i.count, 0)
  return `Pay ${total}`
})

function pay() {
  console.log('Paying...')
}
</script>

<style scoped>
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
