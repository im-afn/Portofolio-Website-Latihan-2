/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_8sb5v23",
      "template_oy7rlkf",
      "#contact-form",
      "CamMHHiZ-Pp_2VJNK"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
