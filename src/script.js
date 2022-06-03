const btn = document.getElementById("mobile-menu-button")
const menu = document.getElementById("mobile-menu")
btn.addEventListener("click", function() {
    menu.classList.toggle("hidden");
})