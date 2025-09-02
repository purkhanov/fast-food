<template>
  <div class="order-item selected">
    <div class="order-item-photo">
      <img :src="props.product.img" :alt="props.product.imgAlt">
    </div>

    <div class="order-item-label">
      <div class="order-item-title">
        {{ props.product.name }} 
        <span class="order-item-counter">
          <span>{{ props.product.count }}</span>x
        </span>
      </div>

      <div class="order-item-description">Meat™</div>
    </div>
    <div class="order-item-price">
      {{ props.product.price * props.product.count }} ₸
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.order-item-photo img {
  height: 100%;
}
</style>