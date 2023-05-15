<script setup>
import gsap from 'gsap'

const props = defineProps({
  id: {
    type: String,
    required: true
  },

  end: {
    type: Number,
    default: 90
  }
})

onMounted(() => {
  const highlights = gsap.utils.toArray(`#${props.id} strong`)
  highlights.forEach(highlight => {
    gsap.from(highlight, {
      scrollTrigger: {
        trigger: highlight,
        toggleClass: "active",
        start: "top center",
        end: "+=" + props.end
      }
    })
  })
})
</script>

<template>
  <div :id="id" class="highlighted-text">
    <slot />
  </div>
</template>

<style lang="scss">
  .highlighted-text strong {
    transition: .25s ease;
    border-radius: .25em;
    box-decoration-break: clone;
    outline: .2em var(--text-background) solid;
    box-shadow: 0 0 0 .2em var(--text-background);
    color: var(--text-color);

    &.active {
      background: var(--highlight-background);
      color: var(--highlight-color);
      outline: .2em var(--highlight-background) solid;
      box-shadow: 0 0 0 .2em var(--highlight-background);
    }
  }
</style>