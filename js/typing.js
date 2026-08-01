/*==================================================
                TYPING EFFECT
==================================================*/

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [

        "Python Full Stack Developer",

        "Flask Developer",

        "FastAPI Developer",

        "Backend Developer",

        "Web Application Developer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1700);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(

            typeEffect,

            isDeleting ? 50 : 90

        );

    }

    typeEffect();

}