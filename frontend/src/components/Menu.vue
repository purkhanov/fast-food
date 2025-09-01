<template>
  <section class="cafe-page cafe-items" style="max-height: 100%;">
    <template v-for="item in itemInfos">
      <Menu-item :itemInfo="item" :class="{'selected': item.count > 0}" />
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
import BurgerImg from '@/components/icons/Burger.png'
import CakeImg from '@/components/icons/Cake.png'

const itemInfos = ref([
  {
    name: 'Cake',
    price: 1200,
    img: CakeImg,
    imgAlt: 'Cake',
    count: 0,
    new: true
  },
  {
    name: 'Burger',
    price: 700,
    img: BurgerImg,
    imgAlt: 'Burger',
    count: 2,
    new: false
  }
])
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
