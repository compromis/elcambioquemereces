<template>
  <div class="container">
    <section class="hero">
      <div class="logo" data-lag=".5">
        <img src="~/assets/images/pp.svg" alt="PP" />
      </div>
      <div class="misclaim" data-lag=".8">
        <img src="~/assets/images/slogan.svg" alt="¿El cambio que mereces?" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    padding: 4rem 1rem;
  }

  .logo {
    text-align: center;

    img {
      width: 8em;
    }
  }

  .misclaim {
    text-align: center;
    margin-top: -2rem;
  
    img {
      width: 90%;
    }
  }
</style>