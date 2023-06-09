/*PLUGINS GRATUITS*/
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/*PLUGINS PAYANTS*/
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);

const bodyScroll = document.querySelector(".bodySprite");

window.addEventListener("scroll", function animateSprite() {
  bodyScroll.classList.add("is-scrolling");
  const minuteur = setTimeout(() => {
    bodyScroll.classList.remove("is-scrolling");
  }, 1000);
});

/*ANIMATION DU "CALL-TO-ACTION" ET MORPHSVG*/
gsap.to("#CTA1", {
  morphSVG: "#CTA2",
  repeat: "-1",
  yoyo: "true",
  duration: 4,
  ease: "none",
});
/*ANIMATION DU OVERLAY*/
gsap
  .timeline()
  .from("#veloD", { y: "100%", ease: "power3" }, "+=1")
  .from("#veloG", { y: "100%", ease: "power3" }, "<=.025")
  .from("#soleil", {
    rotation: 90,
    duration: 1,
    transformOrigin: "right -100%",
    ease: "elastic",
  })
  .from("#etoile", { y: "-100%", ease: "elastic" })
  .from("#pleineLune", {
    rotation: 90,
    duration: 1,
    transformOrigin: "right -100%",
    ease: "elastic",
  })
  .from("#lune", { y: "-100%", duration: 1, ease: "elastic" });
/*ANIMATION DES CHAPITRES*/

/*DRAW SVG + ANIMATION SANS SCRUB + ANIMATION LOOP*/
gsap.fromTo(
  "#etoileSVG",
  { opacity: "100%", drawSVG: "0% 0%" },
  {
    opacity: "25%",
    drawSVG: "0% 100%",
    duration: 4,
    ease: "none",
    scrollTrigger: {
      trigger: "#intro",
      start: "0 top",
      end: "100% 50%",
      markers: true,
      toggleActions: "restart complete reverse reset",
    },
  }
);

gsap.timeline();

/*Animation du Chapitre 1*/
gsap.from("#divin", {
  opacity: 0,
  scrollTrigger: {
    scrub: 0.5,
    trigger: "#intro",
    markers: true,
    start: "8% top",
    end: "18% 50%",
  },
});

/*Animation du Chapitre 2*/
gsap.fromTo(
  "#lucifer",
  { opacity: "0%", scaleX: "0", scaleY: "0" },
  {
    opacity: "100%",
    scaleX: "100%",
    scaleY: "100%",
    duration: 2,

    scrollTrigger: {
      scrub: 0.5,
      markers: true,
      start: "23% top",
      end: "30% 50%",
    },
  }
);

/*Animation du Chapitre 3*/
gsap.fromTo(
  "#spriteDanse",
  { x:"-75%"},
  {
    x:"75%",
    ease: "none",
    transformOrigin: "center 9%",
    repeat: 3,
    scrollTrigger: {
      scrub: 0.5,
      pin: true,
      trigger: "#danse",
      markers: true,
      start: "top top",
      end: "bottom 50%",
    },
  }
);
gsap.fromTo(
  "#spriteDanse",
  { scaleX: "100%"},
  {
    scaleX: "-100%",
    yoyo: "true",
    repeat: "-1",
    duration: 1,
    ease: "none",
  }
);

/*Animation du Chapitre 4*/
gsap.fromTo(
  "#luciferVol",
  { opacity: "0%" },
  {
    opacity: "100%",
    ease: "none",
    transformOrigin: "center 09%",
    scrollTrigger: {
      scrub: 0.5,
      markers: true,
      start: "45% top",
      end: "53% 50%",
    },
  }
);

gsap.fromTo(
  "#luciferVol",
  { scaleY: "100%" },
  {
    scaleY: "95%",
    duration: "0.05",
    repeat: "-1",
    yoyo: "true",
    ease: "none",
    transformOrigin: "right 100%",
  }
);

/*Animation du Chapitre 5*/
gsap.fromTo(
  "#spriteDoigt",
  { y: "-100%", opacity: "0%" },
  {
    y: "0",
    opacity: "100%",
    scrollTrigger: {
      scrub: true,
      pin: true,
      trigger:"#banissement",
      markers: true,
      start: "top top",
      end: "bottom 50%",
    },
  }
);

/*Animation du Chapitre 6*/

gsap.fromTo(
  "#luciferChute",
  { opacity: "0%", ease: "none", y: "0%" },
  {
    opacity: "100%",
    ease: "none",
    y: "150%",
    scrollTrigger: {
      scrub: true,
      pin: true,
      trigger: "#chute",
      markers: true,
      start: "0 top",
      end: "100% 50%",
    },
  }
);

/*Animation du Chapitre 7*/
gsap.fromTo(
  "#luciferTriste",
  { opacity: "0%" },
  {
    opacity: "100%",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      markers: true,
      start: "78% top",
      end: "90% 50%",
    },
  }
);

gsap.fromTo(
  "#luciferTriste",
  { rotate: 5 },
  { rotate: "-5", yoyo: "true", repeat: "-1", ease: "none" }
);

gsap.fromTo("#luciferTriste", { x: "10%" }, { x: "-50%", duration: "3" });

/*MOTHION PATH*/
gsap.to("#texteFin", {
  transformOrigin: "50% 50%",
  opacity: "100%",
  motionPath: {
    path: "#courbe",
    start: 1,
    end: 0.25,
  },
  scrollTrigger: {
    markers: true,
    start: "87% top",
    end: "93% 50%",
  },
  duration: 4
});

/*PARALLAXE*/
gsap.to(".parra", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".parra",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
gsap.to(".rocheG", {
  yPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".parra",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
gsap.to(".rocheP", {
  yPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".parra",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
