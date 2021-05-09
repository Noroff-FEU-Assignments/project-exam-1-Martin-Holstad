const homePageApiContainer = document.querySelector(".home-page-container")
const homePageApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages"

async function homePageFetch() {
    try {
        const response = await fetch(homePageApi + "?page_id=102&_embed");

        const results = await response.json();

        results.forEach(function (result) {
            homePageApiContainer.innerHTML += `<div>
                                               <h2 class="home-page-h2">${result.title.rendered}</h2>
                                               <img class="home-page-image" src="${result._embedded['wp:featuredmedia'][0].source_url}" alt="${result.title.rendered}">
                                               <p>${result.content.rendered}</p>
                                               </div>`
        });

        homePage(results)

    }

    catch (error) {
    }
}

homePageFetch()

const carouselApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts"
const carouselApiContainer = document.querySelector(".carousel-container")
const nextImage = document.querySelector(".fa-chevron-right")
const previousImage = document.querySelector(".fa-chevron-left")


async function carousel() {
    try {
        const response = await fetch(carouselApi + "?per_page=9&_embed");

        const results = await response.json();

        results.forEach(function (results) {
            carouselApiContainer.innerHTML += `
                                               <div class="carousel-image-container">
                                               <img class="carousel-image" src="${results._embedded['wp:featuredmedia'][0].source_url}">
                                               </div>
                                               `
        });

    }

    catch (error) {
        console.log(error)
    }
}

carousel()




