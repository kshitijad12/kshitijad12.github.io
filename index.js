            
// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}



// function contshow4(){
//     window.open(href="./documents/Kshitija_Dokarmare_Resume.pdf");
//      }
// let my_cont_4=document.querySelector(".RFAL").addEventListener("click",contshow4)

document.querySelector('#resume-button-1').addEventListener("click",()=>{
    window.location.assign("https://drive.google.com/file/d/1PQ7xpea9FRWKNv1oLaAKCOEBUph3MoKk/view?usp=sharing","blank");
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
    window.location.assign("https://drive.google.com/file/d/1PQ7xpea9FRWKNv1oLaAKCOEBUph3MoKk/view?usp=sharing","blank");
})








