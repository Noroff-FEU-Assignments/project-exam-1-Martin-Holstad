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

mobileMenuButton.onclick = function () {

    if (mobileMenuContainer.style.display === "none") {
        mobileMenuContainer.style.display = "block"
    } else {
        mobileMenuContainer.style.display = "none"
    }
}