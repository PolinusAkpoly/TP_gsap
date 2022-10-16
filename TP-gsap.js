


let spa = document.querySelectorAll("h1 span");
let bouton = document.querySelectorAll("button");
let lign1 = document.querySelector("#lign1");
let lign2 = document.querySelector("#lign2");
let abre = document.querySelector("#abre");
let iconE = document.querySelectorAll("#ico");



window.addEventListener('load' , () =>{

let tl = gsap.timeline({paused: true}); 

tl.staggerFrom(spa, 1, { top:-70 , opacity: 0 , ease:'power2.out'},0.3)
  .staggerFrom(bouton, 1, { opacity: 0 , ease:'power2.out'},1, '-= 2' )
  .from(lign1, 1, { width: 0 , opacity: 0 , ease:'power2.out'}, '-=2')
  .from(lign2, 1, { width: 0 , opacity: 0 , ease:'power2.out'}, '-=2')
  .from(abre, 1, { transform: 'scale(0) ' , ease:'power2.out'}, '-=2')
  .staggerFrom(iconE , 1, { right: -200 , ease:'power2.out'},0.3, '-=1' )


tl.play();
 
})













































































