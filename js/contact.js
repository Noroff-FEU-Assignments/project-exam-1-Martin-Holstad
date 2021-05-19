const contactApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages/129?_embed"
const contactMainSection = document.querySelector(".contact-main-section")
const contactPageLoader = document.querySelector(".contact-page-loader")
const contactPageLoaderError = document.querySelector(".contact-page-loader-error")

async function contactFetch() {
    try {
        const response = await fetch(contactApi)
        const contactResult = await response.json();

        contactPageLoader.style.display = "none"

        function contactHtml(contactResult) {
            contactMainSection.innerHTML += `<div>
                                             <ul class="page-overview-ul">
                                             <li class="page-overview-li"><a href="index.html">Home / </a></li>
                                             <li class="page-overview-li"><a href="about.html"> Contact </a></li>
                                             </ul>
                                             <h2>${contactResult.title.rendered}</h2>
                                             </div>
                                             <div>
                                             ${contactResult.content.rendered}
                                             </div>
                                             `
            contactSection.style.display = "block"
        }
        contactHtml(contactResult)
    }

    catch (error) {
        contactPageLoader.style.display = "none"
        console.log(error)
        contactPageLoaderError.style.display = "block"
    }
}

contactFetch()

const contactSection = document.querySelector(".contact-section")
const contactSuccessMessage = document.querySelector(".contact-success-message")
const contactForm = document.querySelector(".contact-form")
const contactNameInput = document.querySelector("#name-input");
const contactNameError = document.querySelector("#name-error");
const contactEmailInput = document.querySelector("#email-input");
const contactEmailError = document.querySelector("#email-error");
const contactSubjectInput = document.querySelector("#subject-input");
const contactSubjectError = document.querySelector("#subject-error")
const contactMessageInput = document.querySelector("#message-input");
const contactMessageInputError = document.querySelector("#message-error");
const newMessageButton = document.querySelector(".new-message-button")

function contactValidation(event) {
    event.preventDefault()

    if (contactNameInput.value.trim().length >= 5) {
        contactNameError.style.display = "none"
        contactNameInput.style.borderColor = "grey"
    } else {
        contactNameError.style.display = "block"
        contactNameInput.style.borderColor = "red"
    }

    if (emailRequirements(contactEmailInput.value.trim()) === true) {
        contactEmailError.style.display = "none"
        contactEmailInput.style.borderColor = "grey"
    } else {
        contactEmailError.style.display = "block"
        contactEmailInput.style.borderColor = "red"
    }

    if (contactSubjectInput.value.trim().length >= 15) {
        contactSubjectError.style.display = "none"
        contactSubjectInput.style.borderColor = "grey"
    } else {
        contactSubjectError.style.display = "block"
        contactSubjectInput.style.borderColor = "red"
    }

    if (contactMessageInput.value.trim().length >= 25) {
        contactMessageInputError.style.display = "none"
        contactMessageInput.style.borderColor = "grey";
    } else {
        contactMessageInputError.style.display = "block"
        contactMessageInput.style.borderColor = "red"
    }

    if (checklength(contactNameInput.value, 5) && emailRequirements(contactEmailInput.value) && checklength(contactSubjectInput.value, 15) && checklength(contactMessageInput.value, 25)) {
        contactSuccessMessage.style.display = "block"
        newMessageButton.style.display = "block"
        contactForm.style.display = "none"
        contactForm.reset()
    }
}

contactForm.addEventListener("submit", contactValidation)

newMessageButton.onclick = function () {
    contactSuccessMessage.style.display = "none"
    newMessageButton.style.display = "none"
    contactForm.style.display = "block"
}