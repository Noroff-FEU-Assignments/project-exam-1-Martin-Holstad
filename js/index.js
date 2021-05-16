const homePageApiContainer = document.querySelector(".home-page-container")
const homePageApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages"

async function homePageFetch() {
    try {
        const response = await fetch(homePageApi + "/102?_embed");

        const results = await response.json();

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
        console.log(error)
    }
}
homePageFetch()

const carouselApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/posts"
const carouselSection = document.querySelector(".carousel-section")
const carouselApiContainer = document.querySelector(".carousel-container")
const carouselDotsContainer = document.querySelector(".carousel-dots-container")
const nextImageContainer = document.querySelector(".fa-chevron-right-container")
const previousImageContainer = document.querySelector(".fa-chevron-left-container")

let perPage = 9

if (window.innerWidth <= 730) {

    perPage = 6

} else if (window.innerWidth <= 500) {
    perPage = 3

} else {
    perPage = 9
}


async function carousel() {
    try {
        const response = await fetch(carouselApi + "?per_page=" + perPage + "&_embed");

        const results = await response.json();

        nextImageContainer.style.display = "block"
        previousImageContainer.style.display = "block"
        carouselDotsContainer.style.display = "block"

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
carousel()


const nextImage = document.querySelector(".fa-chevron-right")
const previousImage = document.querySelector(".fa-chevron-left")
const dotOne = document.querySelector(".dot-one")
const dotTwo = document.querySelector(".dot-two")
const dotThree = document.querySelector(".dot-three")

let scrollOffset = 0;

nextImage.onclick = function () {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 730) {
        carouselThreeImageNext()
    } else if (windowWidth < 730 && windowWidth > 500) {
        carouselTwoImageNext()
    } else if (windowWidth <= 500) {
        carouselOneImageNext()
    } else {
        scrollOffset = 0
    }

    carouselApiContainer.scroll({
        left: scrollOffset,
        behavior: 'smooth'
    });
    console.log(scrollOffset)
}

function carouselThreeImageNext() {
    scrollOffset += 706

    if (scrollOffset === 1412) {
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"

    } else if (scrollOffset === 706) {
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else {
        scrollOffset = 0
        dotOne.style.color = "#f29f05"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#4b4b4b"
    }

}

function carouselTwoImageNext() {
    scrollOffset += 470

    if (scrollOffset === 940) {
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"

    } else if (scrollOffset === 470) {
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else {
        scrollOffset = 0
        dotOne.style.color = "#f29f05"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#4b4b4b"
    }
}

function carouselOneImageNext() {
    scrollOffset += 235

    if (scrollOffset === 470) {
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"

    } else if (scrollOffset === 235) {
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else {
        scrollOffset = 0
        dotOne.style.color = "#f29f05"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#4b4b4b"
    }
}

previousImage.onclick = function () {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 730) {
        carouselThreeImagePrevious()
    } else if (windowWidth < 730 && windowWidth > 500) {
        carouselTwoImagePrevious()
    } else if (windowWidth <= 500) {
        carouselOneImagePrevious()
    } else {
        scrollOffset = 0
    }

    carouselApiContainer.scroll({
        left: scrollOffset,
        behavior: 'smooth'
    });
    console.log(scrollOffset)
}

function carouselThreeImagePrevious() {
    scrollOffset -= 706

    if (scrollOffset === 706) {
        dotThree.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else if (scrollOffset === 0) {
        dotTwo.style.color = "#4b4b4b"
        dotOne.style.color = "#f29f05"

    } else {
        scrollOffset = 1412
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"
    }
}

function carouselTwoImagePrevious() {
    scrollOffset -= 470

    if (scrollOffset === 470) {
        dotThree.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else if (scrollOffset === 0) {
        dotThree.style.color = "#4b4b4b"
        dotTwo.style.color = "#4b4b4b"
        dotOne.style.color = "#f29f05"

    } else {
        scrollOffset = 940
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"
    }
}

function carouselOneImagePrevious() {
    scrollOffset -= 235

    if (scrollOffset === 235) {
        dotThree.style.color = "#4b4b4b"
        dotTwo.style.color = "#f29f05"

    } else if (scrollOffset === 0) {
        dotTwo.style.color = "#4b4b4b"
        dotOne.style.color = "#f29f05"

    } else {
        scrollOffset = 470
        dotOne.style.color = "#4b4b4b"
        dotTwo.style.color = "#4b4b4b"
        dotThree.style.color = "#f29f05"
    }
}