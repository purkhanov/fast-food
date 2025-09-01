import { computed, ref } from "vue"
import { defineStore } from "pinia"

import BurgerImg from '@/components/icons/Burger.png'
import CakeImg from '@/components/icons/Cake.png'
import PizzaImg from '@/components/icons/Pizza.png'
import instance from "@/utils/axios"

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Cake',
      price: 1200,
      img: CakeImg,
      imgAlt: 'Cake',
      new: true
    },
    {
      id: 2,
      name: 'Burger',
      price: 700,
      img: BurgerImg,
      imgAlt: 'Burger',
      new: false
    },
    {
      id: 3,
      name: 'Pizza',
      price: 1500,
      img: PizzaImg,
      imgAlt: 'Pizza',
      new: false
    }
    ])

  const basket = ref([])
  const selectedProducts = computed(() => basket.value)

  async function fetchProducts() {
    try {
      const response = await instance.get('/products')

      if (response.status === 200) {
        products.value = response.data
      } else {
        throw new Error(`HTTP fetching products: ${response.status}`)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  function addToBasket(productId) {
    const existing = basket.value.find(i => i.id == productId)

    if (existing) {
      existing.count++
    } else {
      basket.value.push({ id: productId, count: 1 })
    }
  }

  function removeFromBasket(productId) {
    const exsists = basket.value.find(i => i.id === productId)

    if (!exsists) return

    if (exsists.count > 1) {
      exsists.count--
    } else {
      basket.value = basket.value.filter(i => i.id !== productId)
    }
  }

  return { products, selectedProducts, fetchProducts, addToBasket, removeFromBasket }
})