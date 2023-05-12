<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

const main = ref()
const ctx = ref()
const smoother = ref()

onMounted(() => {
  ctx.value = gsap.context(() => {
    smoother.value = ScrollSmoother.create({
      wrapper: '#__nuxt',
      smooth: 1,
      effects: true,
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.value.revert()
})
</script>

<template>
  <div id="smooth-wrapper" ref="main">
    <div id="smooth-content">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
