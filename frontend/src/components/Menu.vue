<template>
  <section class="cafe-page cafe-items" style="max-height: 100%;">
    <Menu-item class="selected" />
    <Menu-item />
    <Menu-item />
    <Menu-item />
    <Menu-item />
  </section>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
</script>

<style scoped>
.cafe-page {
  transition: filter var(--animation);
}

body.closed .cafe-page {
  filter: grayscale(1) opacity(0.7);
}

.cafe-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: 0 auto;
  max-width: 480px;
  transition: max-height var(--page-animation), opacity var(--page-animation);
  background-color: var(--block-bg-color);
}
body.order-mode .cafe-items {
  max-height: 0 !important;
  opacity: 0 !important;
}
.cafe-items:after {
  content: '';
  flex-grow: 2;
}
</style>
