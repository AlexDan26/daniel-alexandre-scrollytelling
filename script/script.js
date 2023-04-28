gsap.registerPlugin(ScrollTrigger);

const bodyScroll = document.querySelector('.bodySprite');


window.addEventListener("scroll", (function animateSprite(){
    bodyScroll.classList.add("is-scrolling")
    const minuteur = setTimeout(() => { bodyScroll.classList.remove("is-scrolling"); }, 100);
}
) 
)
//ANIMATION DU "CALL-TO-ACTION""
gsap.fromTo("#cta",
           {y:0},
           {y:"50px",
           duration: 1,
           ease: "none",
           yoyo:"true",
           repeat: -1}
           );
//ANIMATION DU OVERLAY
gsap
  .timeline()
  .from("#veloD", { y:"100%", ease:"power3" }, "+=1")
  //.fromTo("#veloD", {x:"0%"},{ x:"5%", ease:"power3", yoyo:"true" }, "+=1")
  .from("#veloG", { y:"100%", ease:"power3" }, "<=.025")
  .from("#soleil", { rotation:90, duration:1, transformOrigin:"right -100%", ease:"elastic" })
  .from("#etoile", { y:"-100%", ease: "elastic"} )
  .from("#pleineLune", { rotation:90, duration:1, transformOrigin:"right -100%", ease:"elastic" })
  .from("#lune", { y:"-100%",duration:1, ease: "elastic"} );
//ANIMATION DES CHAPITRES
  gsap.timeline()
  .fromTo("#divin", 
  { opacity: '0%' }, 
  { opacity: '100%', duration:2 },"+=5")
  .fromTo("#lucifer", 
  { opacity: '0%', scaleX: '0' , scaleY:'0'}, 
  { opacity: '100%', scaleX: '100%', scaleY:'100%', duration:2 },"+=5")
  .fromTo("#luciferDance", 
  { skewX:"20%", scaleX: "100%"}, 
  { skewX:"-20%", scaleX: "-100%", repeat: "-1", yoyo:"true", ease:"none"},"+=5")
  .fromTo("#luciferVol", 
  { scaleY:"100%"}, 
  { scaleY:"95%", duration:"0.05", repeat: "-1", yoyo:"true", ease:"none",transformOrigin:"right 100%"},"+=5")
  .fromTo("#main", 
  { y:"-100%", opacity:"0%"}, 
  { y:"0", opacity:"100%"},"+=5")
  .fromTo("#luciferChute", 
  { y:"5%"}, 
  { y:"0", yoyo:"true", repeat:"-1", ease:"none"},"+=5")
  .fromTo("#luciferTriste", 
  { rotate:5}, 
  { rotate:"-5", yoyo:"true", repeat:"-1", ease:"none"},"+=5")
  .fromTo("#luciferTriste", 
  { x:"10%"}, 
  { x:"-50%", duration: "3"},"+=5")
