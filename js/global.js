const mobileMenuContainer = document.querySelector(".mobile-nav-menu-container")
const mobileMenuButton = document.querySelector(".mobile-hamburger-button")
const mobileMenuCloseButton = document.querySelector(".mobile-nav-close-buttone")

mobileMenuButton.onclick = function () {

    mobileMenuContainer.style.display = "block"
}

mobileMenuCloseButton.onclick = function () {

    mobileMenuContainer.style.display = "none"
}