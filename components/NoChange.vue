<template>
  <section class="no-change">
    <div class="container">
      <HighlightedText id="nochange" :end="400">
        <p>
          Com podeu veure, el PP no ofereix cap canvi.
          <strong>És el mateix PP de sempre</strong> i ni tan sols
          s’han molestat en canviar
          les cares principals, mostra de la poca vergonya i respecte
          que tenen front al poble valencià.
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
</style>