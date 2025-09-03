<template>
  <section class="order-overview">
    <div class="order-block">
      <div class="order-header-wrap">
        <h2 class="order-header">Your Order</h2>
        <span @click="editBtn" class="order-edit">Edit</span>
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
</template>

<script setup>
import '@/assets/css/order-view.css'
import { useProductStore } from '@/stores/product'
import OrderItem from '@/components/OrderItem.vue'

const productStore = useProductStore()

const emit = defineEmits(['edit-clicked'])

function editBtn() {
  emit('edit-clicked')
}
</script>
