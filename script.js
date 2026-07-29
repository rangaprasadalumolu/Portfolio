/*=====================================================
    PORTFOLIO JAVASCRIPT
=====================================================*/

/*-----------------------------
Dark / Light Theme
------------------------------*/

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/*-----------------------------
Mobile Menu
------------------------------*/

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("show-menu");

});


document.querySelectorAll("#navMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");

    });

});


/*-----------------------------
Smooth Scroll
------------------------------*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*-----------------------------
Active Navigation
------------------------------*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*-----------------------------
Scroll Reveal Animation
------------------------------*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:0.15

});

document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.timeline-content,.resume-box,.about-content,.about-image"

).forEach(el=>{

observer.observe(el);

});


/*-----------------------------
Skill Progress Animation
------------------------------*/

const progressBars=document.querySelectorAll(".progress-bar");

const progressObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=entry.target.dataset.width;

}

});

},{threshold:.4});

progressBars.forEach(bar=>{

progressObserver.observe(bar);

});


/*-----------------------------
Counter Animation
------------------------------*/

const counters=document.querySelectorAll(".card h3");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100 && !counterStarted){

counterStarted=true;

animateCounters();

}

});

function animateCounters(){

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text);

if(isNaN(number)) return;

let count=0;

const speed=25;

const update=()=>{

count++;

counter.innerText=count+"+";

if(count<number){

setTimeout(update,speed);

}else{

counter.innerText=text;

}

}

update();

});

}


/*-----------------------------
Header Background
------------------------------*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>80){

header.style.background="rgba(5,8,22,.92)";

header.style.boxShadow="0 5px 25px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(5,8,22,.55)";

header.style.boxShadow="none";

}

});


/*-----------------------------
Typing Effect
------------------------------*/

const role=document.querySelector(".hero h2");

if(role){

const words=[

"Python Full Stack Developer",

"Flask Developer",

"Backend Developer",

"Frontend Enthusiast"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

role.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

role.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?45:90);

}

type();

}


/*-----------------------------
Contact Form
------------------------------*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


/*-----------------------------
Parallax Effect
------------------------------*/

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.querySelectorAll(".background span").forEach((circle,index)=>{

const speed=(index+1)*12;

circle.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});


/*-----------------------------
Project Hover Tilt
------------------------------*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*-----------------------------
Scroll To Top Button
------------------------------*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-button";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#6C63FF,#00D4FF);
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 30px rgba(108,99,255,.4);
transition:.3s;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*-----------------------------
Page Loader Fade
------------------------------*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .7s";

setTimeout(()=>{

document.body.style.opacity="1";

},150);

});


/*=====================================================
END
=====================================================*/