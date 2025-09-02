<template>
  <section class="order-overview">
    <div class="order-block">
      <div class="order-header-wrap">
        <h2 class="order-header">Your Order</h2>
        <span @click="edit" class="order-edit">Edit</span>
      </div>

      <div class="order-item selected" v-for="order in basketStore.basket">
        <div class="order-item-photo">
          <img :src="order.img" :alt="order.imgAlt" style="height: 100%;">
        </div>

        <div class="order-item-label">
          <div class="order-item-title">
            {{ order.name }} 
            <span class="order-item-counter">
              <span>{{ order.count }}</span>x
            </span>
          </div>

          <div class="order-item-description">Meat™</div>
        </div>
        <div class="order-item-price">{{ order.price * order.count }} ₸</div>
      </div>

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
</template>

<script setup>
import '@/assets/css/order-view.css'
import { useProductStore } from '@/stores/product'

const props = defineProps({
  showOrderPage: Boolean
})
const emit = defineEmits(['update:showOrderPage'])
const basketStore = useProductStore()


function edit() {
  emit('update:updateShowOrderPage', false)
}
</script>

<style scoped>
textarea {
  overflow: hidden;
  overflow-wrap: break-word;
  height: 46px;
}
</style>