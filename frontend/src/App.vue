<template>
  <RouterView />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { tg } from './telegram-api'



onMounted(async () => {
  console.log(tg.initData, "---")
})
</script>
