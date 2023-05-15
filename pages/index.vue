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

  &.orange {
    background-color: $orange;
  }
}
</style>
