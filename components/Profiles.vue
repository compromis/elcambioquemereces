<script setup>
import gsap from 'gsap'

const animations = ref(null)
const container = ref(null)
const profiles = ref(null)

onMounted(() => {
  animations.value = gsap.context(() => {
    const mm = gsap.matchMedia()
    mm.add({
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)"
    }, ({ conditions: { isMobile} }) => {
      const sections = gsap.utils.toArray(".profile")
      if (!isMobile) {
        container.value = gsap.to(sections, {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: profiles.value,
            pin: true,
            scrub: .1,
            end:  `+=${profiles.value.offsetWidth * 3}`
          }
        })
      }

      gsap.set('.profile-card', { y: 100, x: 50, rotate: 5, opacity: 0 })
      gsap.set('.profile-picture-cutout', { y: 200, x: -50, rotate: -10, opacity: 0 })
      gsap.set('.profile-picture-shadow', { y: 200, x: -50, rotate: -10, opacity: 0 })

      gsap.to('.profile-1 .profile-card', {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: '.profile-1',
          start: isMobile ? "top 80%" : "top center",
          toggleActions: "play none none reset"
        }
      })
      gsap.to('.profile-1 .profile-picture-cutout', {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: '.profile-1',
          start: isMobile ? "top 80%" : "top center",
          toggleActions: "play none none reset"
        }
      })
      gsap.to('.profile-1 .profile-picture-shadow', {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
        duration: 3,
        ease: "elastic",
        scrollTrigger: {
          trigger: '.profile-1',
          start: isMobile ? "top 80%" : "top center",
          toggleActions: "play none none reset"
        }
      })

      const cards = gsap.utils.toArray(".profile-card-inside .profile-card")
      cards.forEach(card => {
        gsap.to(card, {
          y: 0,
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 2,
          ease: "elastic",
          scrollTrigger: {
            trigger: card,
            containerAnimation: isMobile ? false : container.value,
            start: isMobile ? "top bottom" : "left center",
            toggleActions: "play none none reset"
          }
        })
      })

      const pictureCutouts = gsap.utils.toArray(".profile-card-inside .profile-picture-cutout")
      pictureCutouts.forEach(picture => {
        gsap.to(picture, {
          y: 0,
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 2,
          ease: "elastic",
          scrollTrigger: {
            trigger: picture,
            containerAnimation: isMobile ? false : container.value,
            start: isMobile ? "top bottom" : "left center",
            toggleActions: "play none none reset",
          }
        })
      })

      const pictureShadows = gsap.utils.toArray(".profile-card-inside .profile-picture-shadow")
      pictureShadows.forEach(picture => {
        gsap.to(picture, {
          y: 0,
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 3,
          ease: "elastic",
          scrollTrigger: {
            trigger: picture,
            containerAnimation: isMobile ? false : container.value,
            start: isMobile ? "top bottom" : "left center",
            toggleActions: "play none none reset",
          }
        })
      })
    })
  }, profiles.value)
})
</script>

<template>
  <section class="profiles" ref="profiles">
    <Profile class="profile-1" picture="mazon">
      <h2>Carlos Mazón</h2>
      <p>
        No és cap renovació. De fet, és el “fill polític” de Zaplana.
        Per a qui no el recorde (quina sort!), és el pare de la corruppció valenciana
        i principal acusat al cas Erial per blanquejar milions
        d’euros de comissions guanyades quan van privatitzar les ITV
        (de les quals s’encarregava Mazón, per cert) perquè es forraren els seus amics.
      </p>
    </Profile>
    <Profile class="profile-2 profile-card-inside" picture="catala">
      <h2>Mª José Català</h2>
      <p>
        Tampoc és una cara nova. De fet, ha sigut la portaveu i consellera d’Educació
        de la Generalitat que ha fet més retallades. Podem destacar les millors jugades
        de MJ Català com a consellera d'Educació: tirar a 5.000 mestres al carrer,
        voler cobrar als xiquets per dur <em>tuppers</em> per a dinar a l’escola i privatitzar
        la universitat VIU venent-la a un preu ridícul per a després ser contractada com a professora!
        (quina sorpresa!)
      </p>
    </Profile>
    <Profile class="profile-3 profile-card-inside" picture="fabra">
      <h2>Alberto Fabra</h2>
      <p>
        Per últim, en Castelló també presenten un "cambio": el no del tot honorable expresident Alberto Fabra.
      </p>
      <p>
        Amb este Fabra com a president es van cometre les majors retallades de la història del nostre país:
        educació, serveis socials, sanitat i tots els serveis públics. També va ser el responsable i
        executor de tancar la radiotelevisió pública valenciana, deixant-nos sense l'únic servei
        de comunicació valencià i en valencià.
      </p>
    </Profile>
  </section>
</template>

<style lang="scss">
.profiles {
  display: flex;
}

.profile-2 {
  .profile-picture {
    transform: translate(-20%, -90%);
  }
}

.profile-3 {
  .profile-picture {
    max-width: 800px;
    transform: translate(-20%, -100%);
  }
}

@include media-breakpoint-down(md) {
  .profiles {
    flex-direction: column;
  }
}
</style>