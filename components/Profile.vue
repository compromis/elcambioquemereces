<template>
  <article class="profile">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
  .profile {
    background: $yellow;
    height: 100vh;
    width: 100vw;
    flex-shrink: 0;
  }
</style>