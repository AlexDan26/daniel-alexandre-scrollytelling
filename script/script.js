gsap.registerPlugin(ScrollTrigger);

const bodyScroll = document.querySelector("#sectionSprite");

window.addEventListener("scroll", (function animateSprite(){
    bodyScroll.classList.add(".is-scrolling")
    console.log("Hello");
    const minuteur = setTimeout(animateSprite, 200);
    /*if(minuteur = 0){
        bodyScroll.classList.remove(".is-scrolling");
    }*/
}
) 
)
gsap.to('window', {
    scrollTrigger: {
      markers: true,
      trigger: '#sectionSprite',
    },
    x: '100%',
    duration: 2,
    
  });
//gsap.to(window)