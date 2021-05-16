const contactApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages/129?_embed"
const contactMainSection = document.querySelector(".contact-main-section")

async function contactFetch() {
    try {
        const response = await fetch(contactApi)
        const contactResult = await response.json();

        function contactHtml(contactResult) {
            contactMainSection.innerHTML += `<div>
                                             <h2>${contactResult.title.rendered}</h2>
                                             </div>
                                             <div>
                                             ${contactResult.content.rendered}
                                             </div>
                                             <form class="contact-form">
                                             <div class="name-container">
                                             <label for="name-input" class="name-label">Name*</label>
                                             <input type="text" id="name-input" placeholder="Enter name here">
                                             </div>
                                             <div class="email-container">
                                             <label for="email-input" class="email-label">Email*</label>
                                             <input type="text" id="email-input" placeholder="Enter email here">
                                             </div>
                                             <div class="subject-container">
                                             <label for="subject-input" class="subject-label">Subject*</label>
                                             <input type="text" id="subject-input" placeholder="Enter subject here">
                                             </div>
                                             <div class="message-container">
                                             <label for="message-input" class="message-label">Message*</label>
                                             <textarea name="message-input" id="message-input" placeholder="Enter message here"></textarea>
                                             </div>
                                             <div class="contact-submit-button-container">
                                             <button class="contact-submit-button">Add comment</button>
                                             </div>
                                             </form>
                                             `
        }
        contactHtml(contactResult)
    }

    catch (error) {
    }
}

contactFetch()