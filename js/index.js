const postsApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector("#posts-container");

async function fetchPosts() {
    try {
        const response = await fetch(postsApi);

        const result = await response.json();

        const postInfo = result;

        postInfo.forEach(function (posts) {

            postsContainer.innerHTML += `<div>
                                         ${posts.content.rendered}
                                         <p>${posts._embedded.author[0].name}</p>
                                         </div > `
        });

    }

    catch (error) { }
}

fetchPosts()
