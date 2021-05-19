const aboutApi = "https://holstaddesign.com/food-for-you/wp-json/wp/v2/pages/135?_embed"
const aboutMainSection = document.querySelector(".about-main-container")
const aboutPageLoader = document.querySelector(".about-page-loader")
const aboutPageLoaderError = document.querySelector(".about-page-loader-error")

async function aboutFetch() {
    try {
        const response = await fetch(aboutApi)
        const aboutResult = await response.json();

        aboutPageLoader.style.display = "none"

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
        aboutPageLoader.style.display = "none"
        console.log(error)
        aboutPageLoaderError.style.display = "block"
    }
}
aboutFetch()

