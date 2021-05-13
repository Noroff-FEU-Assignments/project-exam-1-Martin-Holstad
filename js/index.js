const homePageApiContainer = document.querySelector(".home-page-container")
const homePageApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages"

async function homePageFetch() {
    try {
        const response = await fetch(homePageApi + "/102?_embed");

        const results = await response.json();

        carousel()

        function homeHtml(result) {
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
        }

        homeHtml(results)
    }

    catch (error) {
    }
}

homePageFetch()






const carouselApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts"
const carouselSection = document.querySelector(".carousel-section")
const carouselApiContainer = document.querySelector(".carousel-container")
const nextImageContainer = document.querySelector(".fa-chevron-right-container")
const previousImageContainer = document.querySelector(".fa-chevron-left-container")


async function carousel() {
    try {
        const response = await fetch(carouselApi + "?per_page=9&_embed");

        const results = await response.json();

        nextImageContainer.style.display = "block"
        previousImageContainer.style.display = "block"
        carouselSection.style.display = "block"


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


const nextImage = document.querySelector(".fa-chevron-right")
const previousImage = document.querySelector(".fa-chevron-left")
const dotOne = document.querySelector(".dot-one")
const dotTwo = document.querySelector(".dot-two")
const dotThree = document.querySelector(".dot-three")

let scrollOffset = 0


nextImage.onclick = function () {

    scrollOffset += 706

    carouselApiContainer.scroll({
        left: scrollOffset,
        behavior: 'smooth'
    });


    if (scrollOffset === 706) {
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"
    }

    if (scrollOffset >= 1412) {
        scrollOffset = 1412
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"
    }
    if (window.innerWidth <= 1000) {
        console.log("hey")
    }
    console.log(scrollOffset)
}


previousImage.onclick = function () {

    scrollOffset -= 706

    carouselApiContainer.scroll({
        left: scrollOffset,
        behavior: 'smooth'
    });

    if (scrollOffset === 706) {
        dotThree.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"
    }

    if (scrollOffset <= 0) {
        scrollOffset = 0
        dotTwo.style.color = "#4b4b4b"
        dotOne.style.color = "#f29f05"
    }
}

const backToTopButton = document.querySelector(".back-to-top-arrow")

backToTopButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

const mobileMenuContainer = document.querySelector(".mobile-nav-menu-container")
const mobileMenuButton = document.querySelector(".mobile-hamburger-button")
const mobileMenuCloseButton = document.querySelector(".mobile-nav-close-buttone")

mobileMenuButton.onclick = function () {

    mobileMenuContainer.style.display = "block"
}

mobileMenuCloseButton.onclick = function () {

    mobileMenuContainer.style.display = "none"
}
