<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

const smoother = ref()

onMounted(() => {
  let mm = gsap.matchMedia()

  mm.add('(min-width: 768px)', () => {
    smoother.value = ScrollSmoother.create({
      wrapper: '#__nuxt',
      smooth: 1,
      effects: true
    })
  })

  mm.add('(max-width: 767px)', () => {
    smoother.value && smoother.value.kill()
  })
})
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
