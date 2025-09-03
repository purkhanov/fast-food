<template>
  <Products class="product" :class="{'show-product': showOrder}" />
  <Orders
    @edit-clicked="productOrderToggle" 
    class="order" 
    :class="{'show-order': showOrder}" 
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useProductStore } from '@/stores/product'
import { tg } from '@/telegram-obj'
import Products from '@/components/Products.vue'
import Orders from '@/components/Orders.vue'

const productStore = useProductStore()
const showOrder = ref(false)
const btnText = "ЗАКАЗАТЬ"

const total = computed(() => productStore.basket.reduce((acc, i) => acc + i.price * i.count, 0))

console.log(tg.colorScheme, "color scheme")

tg.MainButton.hasShineEffect = true
tg.MainButton.position = "bottom"
tg.MainButton.setText(btnText)

tg.MainButton.onClick(() => {
  if (!showOrder.value) {
    productOrderToggle()
  } else {
    console.log('Paying')
  }
})

tg.BackButton.onClick(() => {
  productOrderToggle()
})

watch(() => productStore.basket.length, (newLength) => {
  if (newLength > 0) {
    tg.MainButton.show()
  } else {
    tg.MainButton.hide()

    if (showOrder.value) {
      showOrder.value = false
      tg.BackButton.hide()
    }
  }
})

function productOrderToggle() {
  if (!showOrder.value) {
    showOrder.value = true
    tg.BackButton.show()
    tg.MainButton.setText(`ОПЛАТИТЬ ${total.value}`)
  } else {
    showOrder.value = false
    tg.MainButton.setText(btnText)
    tg.BackButton.hide()
  }
}
</script>

<style scoped>
.order {
  display: none;
}

.show-order {
  display: block;
}

.show-product {
  display: none;
}
</style>
