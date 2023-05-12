<script setup>
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
</script>

<template>
  <div>
    <nuxt-page />

    <div class="footer-wrapper">
      <div class="container">
        <b-footer variant="white" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/fonts";

h1, h2, h3, h4, h5, h6 {
  letter-spacing: -.03em;
}
</style>