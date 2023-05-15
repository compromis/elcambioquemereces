<script setup>
defineProps({
  picture: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="profile">
    <div class="profile-wrapper">
      <div class="profile-picture">
        <img :src="`/images/${picture}.png`" class="profile-picture-cutout" />
        <img :src="`/images/${picture}.svg`" class="profile-picture-shadow" />
      </div>
      <div class="profile-card">
        <slot />
      </div>
  </div>
  </article>
</template>

<style lang="scss" scoped>
  .profile {
    display: grid;
    height: 100vh;
    width: 100vw;
    flex-shrink: 0;
    place-items: center;
    border-radius: 2rem;

    &-wrapper {
      position: relative;
      max-width: 600px;
      width: 80%;
    }

    &-card {
      background: $lightblue;
      padding: 1.5rem;
      color: $blue;
      border-radius: 1rem;
      font-size: 1.25rem;
      margin-top: 30vh;

      :deep(p:last-child) {
        margin-bottom: 0;
      }
    }

    &-picture {
      width: 100%;
      max-width: 500px;
      position: absolute;
      transform: translate(-20%, -70%);
      top: 50%;
      left: 0;

      img {
        width: 100%;
      }

      &-cutout {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }

      &-shadow {
        position: relative;
        top: -8%;
        left: 1%;
        scale: 1.1;
      }
    }
  }

  @include media-breakpoint-up(md) {
    .profile:not(:first-child) {
      margin-left: -50vw;
    }
  }
</style>