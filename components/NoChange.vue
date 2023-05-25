<template>
  <section class="no-change">
    <div class="container">
      <div class="ballot">
        <img src="~/assets/images/mjballot.png" alt="Papereta de les eleccions autonomiques 2011 amb Maria Jose Català en mig de polítics corruptes del PP" />
      </div>
      <HighlightedText id="nochange" :end="400">
        <p>
          Com podeu veure, el PP no ofereix cap canvi.
          <strong>És el mateix PP de sempre</strong> i ni tan sols
          s’han molestat en canviar
          les cares principals, mostra de la poca vergonya i respecte
          que tenen cap al poble valencià.
        </p>
      </HighlightedText>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .no-change {
    color: $white;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin: 10vh 1.5rem;
    line-height: 1.35;
  }

  .container {
    max-width: 40ch;
  }

  strong {
    --text-color: #{$white};
    --text-background: #{$blue};
    --highlight-color: #{$white};
    --highlight-background: #{$yellow};
  }

  .ballot {
    display: block;
    max-width: 600px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
</style>