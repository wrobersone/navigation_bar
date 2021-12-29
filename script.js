let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// <i class='bx bx-x'></i>
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("search-box" ,"bx-x");
    } else {
        searchBox.classList.replace("bx-x" ,"bx-search");
    }
})

// Sidebar Action
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
});

// Sidebar Sub Menu Action
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show1");
});

let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show2");
});

let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show3");
});