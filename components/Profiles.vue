<script setup>
import gsap from 'gsap'

const animation = ref(null)
const profiles = ref(null)

onMounted(() => {
  const sections = gsap.utils.toArray(".profile")
  animation.value = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: '.profiles',
      pin: true,
      scrub: .1,
      end: "+=3000"
    }
  })
})
</script>

<template>
  <section class="profiles" name="profiles">
    <Profile class="profile">
      Hello
    </Profile>
    <Profile>
      Hello
    </Profile>
    <Profile>
      Hello
    </Profile>
  </section>
</template>

<style lang="scss" scoped>
.profiles {
  display: flex;
  gap: 2rem;
  background: $green;
}
</style>