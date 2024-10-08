<script setup>
import gsap from 'gsap'

const card = ref(null)
onMounted(() => {
  gsap.from(card.value, {
    scale: 0.85,
    scrollTrigger: {
      trigger: card.value,
      start: "top bottom",
      end: "+=400",
      scrub: true
    },
  })

  const highlights = gsap.utils.toArray(".real-change strong")
  highlights.forEach(highlight => {
    gsap.from(highlight, {
      scrollTrigger: {
        trigger: highlight,
        toggleClass: "active",
        start: "center center",
        end: "+=80"
      }
    })
  })
})
</script>

<template>
  <section class="real-change">
    <div class="card" ref="card">
      <div class="container">
        <HighlightedText id="realchange">
          <p>
            <strong>El canvi real va ser el 2015</strong>, quan els valencians i valencianes vam eixir
            primer als carrers i després a les urnes per a <strong>acabar amb 20 anys de corrupció</strong>, desfeta i vergonya.
          </p>
          <p>
            Des d'aleshores, <strong>hem revertit les retallades</strong>, hem dignificat les institucions valencianes i
            hem millorat els serveis públics. <strong>Més professorat, més ajudes a la dependència i més gent treballant que mai</strong>.
          </p>
          <p>
            Hem passat <strong>de ser coneguts per la corrupció i el malbaratament a ser exemple de bona gestió</strong>,
            per posar les persones al centre de les nostres polítiques. Per a centrar-nos en <a href="https://pertotelqueimporta.com">tot el que importa</a>.
          </p>
          <p>
            <a href="https://pertotelqueimporta.com">pertotelqueimporta.com</a>
          </p>
        </HighlightedText>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .real-change {

    .card {
      border-radius: 2.5rem 2.5rem 0 0;
      background: $orange;
      color: $white;
      font-size: clamp(1.5rem, 5vw, 2rem);
      line-height: 1.35;
      padding: 2.5rem 1.5rem;
    }

    .container {
      max-width: 40ch;
    }

    p {
      margin-bottom: 1em;
    }

    strong {
      --text-color: #{$white};
      --text-background: #{$orange};
      --highlight-color: #{$orange};
      --highlight-background: #{$white};
    }

    a {
      color: $white;
    }
  }

  .background {
    background-color: $orange;

    img {
      width: 100%;
    }
  }

  @include media-breakpoint-up(md) {
    .real-change {
      .card {
        padding: 6rem;
      }
    }
  }
</style>