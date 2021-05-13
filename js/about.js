const aboutApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages/135?_embed"
const aboutMainSection = document.querySelector(".about-main-container")

async function aboutFetch() {
    try {
        const response = await fetch(aboutApi)
        const aboutResult = await response.json();


        function aboutHtml(aboutResult) {
            aboutMainSection.innerHTML += `<div>
                                             <h2>${aboutResult.title.rendered}</h2>
                                             </div>
                                             <div>
                                             ${aboutResult.content.rendered}
                                             </div>
                                             `
        }
        aboutHtml(aboutResult)
    }

    catch (error) {
    }
}

aboutFetch()

const backToTopButton = document.querySelector(".back-to-top-arrow")

backToTopButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

