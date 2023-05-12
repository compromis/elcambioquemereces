<template>
  <div class="container">
    <section class="nope">
      <p class="big-nope" data-lag=".5">
        No.
      </p>
      <div class="text" data-lag=".8">
        És el mateix PP corrupte, mafiós i despilfarrador de sempre.
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .nope {
    text-align: center;
    margin: 4vh 0;
  }

  .big-nope {
    color: $yellow;
    font-weight: 900;
    font-size: clamp(3rem, 10vw, 20rem);
    letter-spacing: -.03em;
    line-height: 1;
  }

  .text {
    color: $white;
    font-weight: 900;
    font-size: clamp(1.5rem, 5vw, 4rem);
    letter-spacing: -.03em;
    line-height: 1;
  }
</style>