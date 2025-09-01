<template>
  <div class="cafe-item js-item" data-item-id="1" data-item-price="499">
    <div class="cafe-item-counter">1</div>
    <div class="cafe-item-photo">
      <img src="../components/icons/Burger.png" alt="Burger" style="height: 100%;">
    </div>
    <div class="cafe-item-label">
      <span class="cafe-item-title">Burger</span>
      <span class="cafe-item-price">$4.99</span>
    </div>
    <div class="cafe-item-buttons">
      <button class="cafe-item-decr-button button-item ripple-handler">
        <span class="ripple-mask">
          <span class="ripple"></span>
        </span>
      </button>
      <button class="cafe-item-incr-button button-item ripple-handler">
        <span class="button-item-label">Add</span>
        <span class="ripple-mask">
          <span class="ripple" ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import '@/assets/css/menu-item.css'
</script>