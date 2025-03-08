window.onscroll = function () {
    let button = document.getElementById("topButton");
    if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        let menu = document.querySelector(".menu");
        menu.classList.remove("show");
    });
});