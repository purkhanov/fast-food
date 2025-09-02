<template>
  <section class="order-overview">
    <div class="order-block">
      <div class="order-header-wrap">
        <h2 class="order-header">Your Order</h2>
        <span class="order-edit">Edit</span>
      </div>

      <div class="order-item selected" data-item-id="1">
        <div class="order-item-photo">
          <img src="../assets/icons/Burger.png" alt="Burger" style="height: 100%;">
        </div>
        <div class="order-item-label">
          <div class="order-item-title">Burger <span class="order-item-counter"><span>1</span>x</span></div>
          <div class="order-item-description">Meat™</div>
        </div>
        <div class="order-item-price">$4.99</div>
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

const basketStore = useProductStore()
</script>

<style scoped>
textarea {
  overflow: hidden;
  overflow-wrap: break-word;
  height: 46px;
}
</style>