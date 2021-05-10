const postSection = document.querySelector("main")
const stringDetails = document.location.search;
const newUrlDetails = new URLSearchParams(stringDetails);
const idDetails = newUrlDetails.get("id")
const urlDetails = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts/" + idDetails + "&_embed";




async function recipeDetails() {

    try {
        const response = await fetch(urlDetails)

        const postDetails = await response.json()


        function newHtml(postDetails) {
            postSection.innerHTML += `<section class ="post-container">
                                      <img class="image-module" src="${postDetails._embedded['wp:featuredmedia'][0].source_url}" alt ="${postDetails.title.rendered}">
                                      <h2>${postDetails.title.rendered}</h2>
                                      <p class="post-date">Date: ${postDetails.date}</p>
                                      <p class="post-author">Author: ${postDetails._embedded.author[0].name}</p>
                                      ${postDetails.content.rendered}
                                      </section>
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

        console.log(postDetails)

    }

    catch { }
}
recipeDetails()

