const postsApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector("main");
const postsReadMoreButton = document.querySelector(".posts-read-more-button")

async function fetchPosts() {
    try {
        const response = await fetch(postsApi);

        const result = await response.json();

        const postInfo = result;

        postInfo.forEach(function (posts) {

            postsContainer.innerHTML += `<section class="posts-main-image-container">
                                         <div>
                                         <a href="recipe-details.html?id=${posts.id}?name=${posts.title.rendered}?author=${posts._embedded.author[0].name}?date=${posts.date}">
                                         <img class="posts-main-image" src="${posts._embedded['wp:featuredmedia'][0].source_url}" alt="${posts.title.rendered}">
                                         <h2 class="posts-h2">${posts.title.rendered}</h2>
                                         </a>
                                         <p class="posts-date">Date: ${posts.date}</p>
                                         <p class="posts-author">Recipe by: ${posts._embedded.author[0].name}</p>
                                         </div >
                                         <div>
                                         ${posts.content.rendered}
                                         </div>
                                         <div>
                                         <a href="recipe-details.html?id=${posts.id}?name=${posts.title.rendered}?author=${posts._embedded.author[0].name}?date=${posts.date}">
                                         <button class="posts-read-more-button">Read more</button>
                                         </a>
                                         </div>
                                         </section> `
        });
    }

    catch (error) { }
}

fetchPosts()
