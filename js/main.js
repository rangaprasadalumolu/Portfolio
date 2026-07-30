/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

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

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        const sectionHeight = section.clientHeight;

        if(scrollY>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
SCROLL TO TOP
=========================================*/

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.opacity="1";

        scrollBtn.style.pointerEvents="auto";

    }

    else{

        scrollBtn.style.opacity="0";

        scrollBtn.style.pointerEvents="none";

    }

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
SCROLL REVEAL ANIMATION
=========================================*/

const reveals=document.querySelectorAll(

".section-header,.project-card,.skill-card,.achievement-card,.certificate-card,.timeline-item,.experience-card,.contact-card,.resume-card"

);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".hero-stats h2");

let started=false;

window.addEventListener("scroll",()=>{

    const heroStats=document.querySelector(".hero-stats");

    if(!heroStats) return;

    const top=heroStats.getBoundingClientRect().top;

    if(top<window.innerHeight && !started){

        started=true;

        counters.forEach(counter=>{

            const text=counter.innerText;

            const value=parseInt(text);

            if(isNaN(value)) return;

            let count=0;

            const speed=value/60;

            const update=()=>{

                count+=speed;

                if(count<value){

                    counter.innerText=Math.floor(count)+"+";

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=value+"+";

                }

            }

            update();

        });

    }

});

/*=========================================
THEME TOGGLE
=========================================*/

const themeBtn=document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    const icon=themeBtn.querySelector("i");

    if(document.body.classList.contains("light-theme")){

        icon.className="fa-solid fa-sun";

        localStorage.setItem("theme","light");

    }

    else{

        icon.className="fa-solid fa-moon";

        localStorage.setItem("theme","dark");

    }

});

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-theme");

    themeBtn.querySelector("i").className="fa-solid fa-sun";

}

/*=========================================
CURRENT YEAR
=========================================*/

const year=document.querySelector(".year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

/*=========================================
PARALLAX EFFECT
=========================================*/

window.addEventListener("mousemove",(e)=>{

    const gradient=document.querySelector(".gradient");

    if(!gradient) return;

    const x=e.clientX/window.innerWidth;

    const y=e.clientY/window.innerHeight;

    gradient.style.transform=`translate(${x*40}px,${y*40}px)`;

});

/*=========================================
PREVENT FORM SUBMIT (TEMPORARY)
=========================================*/


console.log("Portfolio Loaded Successfully 🚀");