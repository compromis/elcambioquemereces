<template>
  <main class="background">
    <Hero />
    <Nope />
    <Profiles />
    <NoChange />
    <RealChange />
  </main>
</template>

<style lang="scss" scoped>
.background {
  font-family: $campaign-font;
  background-color: $blue;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;

  &.orange {
    background-color: $orange;
  }
}
</style>
