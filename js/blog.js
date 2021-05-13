const postsApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts-main-image-container");
const postsReadMoreButton = document.querySelector(".posts-read-more-button")
const viewMoreButton = document.querySelector(".view-more-button")

let perPage = 10
let offset = 0


async function fetchPosts() {
    try {
        const response = await fetch(postsApi + "?per_page=" + perPage + "&offset=" + offset + "&_embed");

        const result = await response.json();

        result.forEach(function (posts) {

            postsContainer.innerHTML += `<section>
                                         <div>
                                         <a href="recipe-details.html?id=${posts.id}?name=${posts.title.rendered}?author=${posts._embedded.author[0].name}?date=${posts.date}">
                                         <img class="posts-main-image" src="${posts._embedded['wp:featuredmedia'][0].source_url}" alt="${posts.title.rendered}">
                                         <h2 class="posts-h2">${posts.title.rendered}</h2>
                                         </a>
                                         <p class="posts-date">Date: ${posts.date.slice(0, 10)}</p>
                                         <p class="posts-author">Recipe from: ${posts._embedded.author[0].name}</p>
                                         </div >
                                         <div>
                                         ${posts.content.rendered}
                                         </div>
                                         <div class="button-and-social-media-container">
                                         <div>
                                         <a href="recipe-details.html?id=${posts.id}?name=${posts.title.rendered}?author=${posts._embedded.author[0].name}?date=${posts.date}">
                                         <button class="posts-read-more-button">Read more</button>
                                         </a>
                                         </div>
                                         <div>
                                         <a href="https://www.messenger.com/"><i class="fab fa-facebook-messenger"></i></a>
                                         <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                         <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                         <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                         </div>
                                         </div>
                                         </section> `
        });

    }

    catch (error) {

    }
}

fetchPosts()

viewMoreButton.onclick = function () {
    offset = 10
    viewMoreButton.style.display = "none"
    fetchPosts()
}

const backToTopButton = document.querySelector(".back-to-top-button")

backToTopButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}



