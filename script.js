
// console.log(clock);
// console.log(clock.getHours());
// console.log(clock.getMinutes());
// console.log(clock.getSeconds());


setInterval(()=>{
    let hours=document.querySelector(".hours")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")

let clock= new Date();

hours.innerHTML=clock.getHours();
min.innerHTML=clock.getMinutes();
sec.innerHTML=clock.getSeconds();


},1000)


// animation -------------------------------------------

gsap. from(".box",{

    x:500,
    duration:2,
    delay:1,
    rotate:360






}) 


