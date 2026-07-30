/*=====================================
EmailJS Contact Form
=====================================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const btn=this.querySelector("button");

btn.innerHTML="Sending...";

btn.disabled=true;

const params={

name:this.querySelector('input[type="text"]').value,

email:this.querySelector('input[type="email"]').value,

subject:this.querySelectorAll("input")[2].value,

message:this.querySelector("textarea").value

};

emailjs.send(

"service_mouto5r",

"template_1mbwloj",

params

)

.then(()=>{

btn.innerHTML="Message Sent ✓";

this.reset();

setTimeout(()=>{

btn.innerHTML="Send Message";

btn.disabled=false;

},2500);

})

.catch(()=>{

btn.innerHTML="Try Again";

btn.disabled=false;

alert("Something went wrong.");

});

});

}