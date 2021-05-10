const homePageApiContainer = document.querySelector(".home-page-container")
const homePageApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages"

async function homePageFetch() {
    try {
        const response = await fetch(homePageApi + "?page_id=102&_embed");

        const results = await response.json();

        carousel()

        results.forEach(function (result) {
            homePageApiContainer.innerHTML += `<div>
                                               <h2 class="home-page-h2">${result.title.rendered}</h2>
                                               <a href="about.html">
                                               <img class="home-page-image" src="${result._embedded['wp:featuredmedia'][0].source_url}" alt="${result.title.rendered}">
                                               </a>
                                               <p>${result.content.rendered}</p>
                                               </div>
                                               <div class="lastest-post-social-media">
                                               <a href="https://www.messenger.com/"><i class="fab fa-facebook-messenger"></i></a>
                                               <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                               <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                               <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                               </div>`
        });



        homePage(results)

    }

    catch (error) {
    }
}

homePageFetch()






const carouselApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts"
const carouselSection = document.querySelector(".carousel-section")
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
                                               <a class="carousel-anchor" href="recipe-details.html?id=${results.id}?name=${results.title.rendered}?author=${results._embedded.author[0].name}?date=${results.date}">
                                               <img class="carousel-image" src="${results._embedded['wp:featuredmedia'][0].source_url}">
                                               <h4>${results.title.rendered}</h4>
                                               <p>${results.excerpt.rendered}</p>
                                               </a>
                                               </div>                                
                                               `
        });

    }

    catch (error) {
        console.log(error)
    }
}



let scrollOffset = 0

nextImage.onclick = function () {
    scrollOffset = 0
    scrollOffset += 706

    if (window.innerWidth < 900) {
        scrollOffset = 0
        scrollOffset += 469
    }


    carouselApiContainer.scrollBy(scrollOffset, 0);
}

previousImage.onclick = function () {
    scrollOffset = 0
    scrollOffset -= 706
    carouselApiContainer.scrollBy(scrollOffset, 0);
}