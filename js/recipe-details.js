const postSection = document.querySelector(".recipe-section")
const stringDetails = document.location.search;
const newUrlDetails = new URLSearchParams(stringDetails);
const idDetails = newUrlDetails.get("id")
const urlDetails = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts/" + idDetails + "&_embed";



async function recipeDetails() {

    try {
        const response = await fetch(urlDetails)

        const postDetails = await response.json()

        function newHtml(postDetails) {

            postSection.innerHTML += `
                                      <div class ="post-container">
                                      <div class="image-module">
                                      <img src="${postDetails._embedded['wp:featuredmedia'][0].source_url}" alt ="${postDetails.title.rendered}">
                                      </div>
                                      <h2>${postDetails.title.rendered}</h2>
                                      <p class="post-date">Posted on: ${postDetails.date.slice(0, 10)}</p>
                                      <p class="post-author">Recipe from: ${postDetails._embedded.author[0].name}</p>
                                      <div>
                                      ${postDetails.content.rendered}
                                      </div>
                                      </div>
                                      <form class="add-a-comment-form">
                                      <div class="social-media-container">
                                      <a href="https://www.messenger.com/"><i class="fab fa-facebook-messenger"></i></a>
                                      <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                      <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                      <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                      </div>
                                      <div class="comment-header-container">
                                      <p class="comment-header">Comments:</p>
                                      </div>
                                      <div class="add-a-comment-container">
                                      <label for="add-a-comment-input" class="add-a-comment-label">Add a comment*</label>
                                      <textarea name="add-a-comment-input" id="add-a-comment-input">Add a comment</textarea>
                                      </div>
                                      <div class="name-container">
                                      <label for="name" class="name-label">Name*</label>
                                      <input type="text" id="name-input" value="name">
                                      </div>
                                      <div class="email-container">
                                      <label for="email" class="email-label">Email*</label>
                                      <input type="text" id="email-input" value="Email">
                                      </div>
                                      <div class="add-a-comment-button-container">
                                      <button class="add-a-comment-button">Add comment</button>
                                      </div>
                                      </form>                                   
                                      `
        }
        newHtml(postDetails)

        const imageModalContainer = document.querySelector(".image-modal-container")
        const imageModalCenter = document.querySelector(".modal-image-center")
        const modalImage = document.querySelector(".modal-image")
        const modalImageCloseButton = document.querySelector(".image-modal-cross")
        const images = document.querySelectorAll("img")

        images.forEach(function (image) {
            image.onclick = function () {
                imageModalContainer.style.display = "block"
                modalImage.src = image.src
            }
        })

        imageModalContainer.onclick = function (event) {
            if (event.target === imageModalContainer || event.target === imageModalCenter) {
                imageModalContainer.style.display = "none"
            }
        }

        modalImageCloseButton.onclick = function () {
            imageModalContainer.style.display = "none"
        }
    }

    catch { }
}

recipeDetails()
