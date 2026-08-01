/*==================================================
                DOM ELEMENTS
==================================================*/

const body = document.body;

const header = document.querySelector(".header");

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

const themeBtn = document.getElementById("theme-toggle");

const scrollTopBtn = document.querySelector(".scroll-top");

const progressBar = document.getElementById("progress-bar");

const loader = document.getElementById("loader");

const year = document.querySelector(".year");

const gradientOne = document.querySelector(".gradient-one");

const gradientTwo = document.querySelector(".gradient-two");

/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 900);

});

/*==================================================
                CURRENT YEAR
==================================================*/

if(year){

    year.textContent = new Date().getFullYear();

}

/*==================================================
                MOBILE MENU
==================================================*/

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

menuBtn.innerHTML = navbar.classList.contains("active")

? '<i class="fa-solid fa-xmark"></i>'

: '<i class="fa-solid fa-bars"></i>';

});

}

document.querySelectorAll(".navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

/*==================================================
                THEME TOGGLE
==================================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

body.classList.add("light-theme");

themeBtn.querySelector("i").className="fa-solid fa-sun";

}

themeBtn?.addEventListener("click",()=>{

body.classList.toggle("light-theme");

const icon = themeBtn.querySelector("i");

if(body.classList.contains("light-theme")){

icon.className="fa-solid fa-sun";

localStorage.setItem("theme","light");

}

else{

icon.className="fa-solid fa-moon";

localStorage.setItem("theme","dark");

}

});
/*==================================================
            SCROLL EVENTS
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

const scrollY = window.pageYOffset;

/* Sticky Header */

header.classList.toggle("sticky",scrollY>40);

/* Scroll Top Button */

if(scrollTopBtn){

scrollTopBtn.style.opacity = scrollY>500 ? "1":"0";

scrollTopBtn.style.pointerEvents =

scrollY>500 ? "auto":"none";

}

/* Progress Bar */

if(progressBar){

const height =

document.documentElement.scrollHeight -

window.innerHeight;

const progress =

(scrollY/height)*100;

progressBar.style.width = progress+"%";

}

/* Active Navigation */

let current="";

sections.forEach(section=>{

const top = section.offsetTop-140;

if(scrollY>=top){

current = section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*==================================================
        REVEAL ANIMATION
==================================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".section-header,.detail-box,.skill-card,.timeline-item,.experience-card,.project-card,.achievement-card,.certificate-card,.resume-card,.contact-card"

).forEach(el=>{

observer.observe(el);

});

/*==================================================
        COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const value = parseInt(counter.textContent);

if(isNaN(value)) return;

let count = 0;

const speed = value/70;

function update(){

count += speed;

if(count<value){

counter.textContent=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.textContent=value+"+";

}

}

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/*==================================================
        SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",e=>{

e.preventDefault();

const target =

document.querySelector(anchor.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==================================================
        PARALLAX
==================================================*/

window.addEventListener("mousemove",e=>{

const x = e.clientX/window.innerWidth;

const y = e.clientY/window.innerHeight;

if(gradientOne){

gradientOne.style.transform=

`translate(${x*30}px,${y*30}px)`;

}

if(gradientTwo){

gradientTwo.style.transform=

`translate(${-x*30}px,${-y*30}px)`;

}

});
document.querySelectorAll(

".skill-card,.project-card,.detail-box,.certificate-card,.achievement-card,.contact-card,.timeline-content,.experience-card"

).forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

card.style.setProperty(

"--x",

`${e.clientX-rect.left}px`

);

card.style.setProperty(

"--y",

`${e.clientY-rect.top}px`

);

});

});

/*==================================================
        CONSOLE
==================================================*/

console.log("Portfolio Loaded Successfully 🚀");