<template>
  <section class="cafe-page cafe-items" style="max-height: 100%;">
    <template v-for="item in itemInfos">
      <Menu-item :itemInfo="item" />
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
import BurgerImg from '@/components/icons/Burger.png'
import CakeImg from '@/components/icons/Cake.png'
import PizzaImg from '@/components/icons/Pizza.png'

const itemInfos = ref([
  {
    name: 'Cake',
    price: 1200,
    img: CakeImg,
    imgAlt: 'Cake',
    new: true
  },
  {
    name: 'Burger',
    price: 700,
    img: BurgerImg,
    imgAlt: 'Burger',
    new: false
  },
  {
    name: 'Pizza',
    price: 1500,
    img: PizzaImg,
    imgAlt: 'Pizza',
    new: false
  }
])
</script>

<style scoped>
/* .cafe-page {
  transition: filter var(--animation);
} */

/* body.closed .cafe-page {
  filter: grayscale(1) opacity(0.7);
} */

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
</style>
