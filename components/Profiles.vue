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
          start: "top center",
          toggleActions: "play none none reset",
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
          start: "top center",
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
          start: "top center",
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
            markers: true
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
            markers: true
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
        No és cap renovació. De fet, és el “fill polític”
        de Zaplana, que, per a qui no el recorde (quina sort!),
        és el pare de la corruppció valenciana i principal acusat
        del caso Erial per blanquejar molts milions d’euros
        de comissions guanyades per corromper plans publics com les ITV 
        (de les quals s’encarregava Mazón) i el Plan Eólicode la Generalitat Valenciana.
      </p>
    </Profile>
    <Profile class="profile-2 profile-card-inside" picture="catala">
      <h2>Mª José Català</h2>
      <p>
        Tampoc és una cara nova. De fet, ja ha format part de governs valencians,
        en concret, del més corrupte de la història, el de Paco Camps.
        No podem enumerar tots els seus casos de corruppció ja que hauriem
        de fer una altra web, però podem destacar les millors jugades de MJ Català
        com a consellera de Educació: voler cobrar als xiquets per dur
        <em>tuppers</em> per dinar a l’escola i per privatitzar la universitat VIU 
        (venentla a un preu ridícul) per després ser contractada com a profesora!
        (Quina sorpresa!)
      </p>
    </Profile>
    <Profile class="profile-3 profile-card-inside" picture="fabra">
      <h2>Alberto Fabra</h2>
      <p>
        Per últim, en Castelló també presenten un "<em>cambio</em>": Alberto Fabra.
        No Fabra el <em>bueno</em>, sino el <em>malo</em>.
        Encara que no sabem ben bé quin és quin.
      </p>
      <p>
        Amb este Fabra com a President es van cometre les majors retallades
        de la història del nostre país: educació, serveis socials, sanitat
        i tots els serveis públics. També va ser el responsable i executor de tancar
        la radiotelevisió pública valenciana, deixant-nos sense l'únic servei
        de comunicació valencià i en valencià.
      </p>
    </Profile>
  </section>
</template>

<style lang="scss">
.profiles {
  display: flex;
  overflow: hidden;
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