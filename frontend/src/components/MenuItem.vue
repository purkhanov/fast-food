<template>
  <div class="cafe-item" :class="{'selected': selectedCount > 0}">
    <div class="cafe-item-counter" :class="{'counter-show': selectedCount > 0}">{{ selectedCount }}</div>
    <div class="cafe-item-photo">
      <img :src="itemInfo.img" :alt="itemInfo.imgAlt">
      <span class="cafe-item-new" v-if="itemInfo.new">New</span>
    </div>
    <div class="cafe-item-label">
      <span class="cafe-item-title">{{ itemInfo.name }}</span>
      <span class="cafe-item-price">{{ itemInfo.price }} ₸</span>
    </div>
    <div class="cafe-item-buttons">
      <button @click="decrement" class="cafe-item-decr-button button-item ripple-handler">
        <span class="ripple-mask">
          <span class="ripple"></span>
        </span>
      </button>
      <button @click="increment" class="cafe-item-incr-button button-item ripple-handler">
        <span class="button-item-label">Add</span>
        <span class="ripple-mask">
          <span class="ripple" ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/css/menu-item.css'

defineProps({
  itemInfo: {
    type: Object,
    required: true
  }
})

const selectedCount = ref(0)

function increment(event) {
  selectedCount.value++
}

function decrement(event) {
  if (selectedCount.value > 0) selectedCount.value--
}
</script>