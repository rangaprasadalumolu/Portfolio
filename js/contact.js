/*==================================================
                CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");

        const originalText = button.innerHTML;

        button.disabled = true;

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        emailjs.sendForm(

            "service_mouto5r",

            "template_1mbwloj",

            this

        )

        .then(() => {

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Message Sent';

            this.reset();

            setTimeout(() => {

                button.disabled = false;

                button.innerHTML = originalText;

            }, 2500);

        })

        .catch(() => {

            button.innerHTML =
                '<i class="fa-solid fa-circle-exclamation"></i> Failed';

            setTimeout(() => {

                button.disabled = false;

                button.innerHTML = originalText;

            }, 2500);

        });

    });

}