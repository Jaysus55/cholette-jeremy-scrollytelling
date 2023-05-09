gsap.registerPlugin(ScrollTrigger);


var CTA = gsap.from(".CTA" , {
    y:-50,
    opacity:0,
    duration:2,
    repeat:-1
  })



  gsap.from(".terre" , {
    rotation:360,duration:150,ease:"none",
    scrollTrigger: {
      scrub: true,
      pin: true,
      markers: true,
      start: 'top top',
      end: '300% bottom',
      trigger: 'header',
    }
  })  



var ovni = gsap.from(".ovni" , {
  y:20,
  rotation:3,
  duration:1.5,
  repeat:-1,
  yoyo: true,
})


/*Chapitre1-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

gsap.timeline({ scrollTrigger: {
  scrub: true,
  pin: true,
  markers: true,
  start: 'top top',
  end: '300% bottom',
  trigger: '#chapitre1',
}})
.from(".planete02" , {rotation:360,duration:150,ease:"none"})
.from(".planete01" , {rotation:-360,duration:150,ease:"none"}, '<')

/*Chapitre2-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

gsap.timeline({scrollTrigger:{
  scrub: true,
  pin: true,
  markers: true,
  start: 'top top',
  end: '600% bottom',
  trigger: '#chapitre2',  
}})
.from(".planete03" , {rotation:360,duration:150,ease:"none"})
.from(".planete04" , {rotation:-360,duration:150,ease:"none"},"<")
.fromTo(".fusee",{x:"-400%", y:"100"},{x:"1900%", y:"-1000", duration:"100"}, '<')  
/*Chapitre3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var planete5 = gsap.from(".planete05" , {
  rotation:-360,duration:150,repeat:-1,ease:"none"
})  


/*Chapitre4-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  var baleines = gsap.timeline()
  .from(".baleine.no1", { x:"400%",duration:3 })
  .from(".baleine.no2", { x:"400%",duration:3 }, 0.5)
  .from(".baleine.no3", { x:"500%",duration:2} )
  .from(".baleine.no4", { x:"400%",duration:3} )
  .from(".baleine.no5", { x:"400%",duration:3} );

/*Chapitre5-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var asteroidPetit = gsap.timeline()
.fromTo(".asteroid1", { x:"1100%",rotation:"0"},{ x:"-400%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid2", { x:"1100%",rotation:"0"},{ x:"-300%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid3", { x:"1400%",rotation:"0"},{ x:"-1700%",rotation:"-360",duration:10 },"<0.25")

/*Chapitre6-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  var brisement = gsap.timeline()
  .from(".planete.Briser1", { y:"-70%",duration:3}, "<0.5")
  .from(".planete.Briser2", { x:"400%",duration:3}, "<0.3")
  .from(".planete.Briser3", { y:"400%",duration:3}, "<0.4")
  .from(".planete.Briser4", { x:"-400%",duration:3}, "<0.5");    

  brisement.reverse(0);

/*Chapitre7-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var asteroidGros = gsap.timeline()
.fromTo(".asteroid4", { x:"1100%",rotation:"0"},{ x:"-200%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid5", { x:"1100%",rotation:"0"},{ x:"-800%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid6", { x:"1400%",rotation:"0"},{ x:"-1700%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid7", { x:"1100%",rotation:"0"},{ x:"-400%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid8", { x:"1100%",rotation:"0"},{ x:"-400%",rotation:"-360",duration:10 },"<0.25")
.fromTo(".asteroid9", { x:"1400%",rotation:"0"},{ x:"-1700%",rotation:"-360",duration:10 },"<0.25")

/*Chapitre8-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var cthulu = gsap.from(".cthulu" , {
  x:20,
  opacity:0,
  duration:2,
})