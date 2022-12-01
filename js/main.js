const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const siteHeader = document.getElementById("site-header");
const siteHero = document.getElementById("hero");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    siteHeader.style.filter = "blur(1px)"
    siteHero.style.filter = "blur(5px)"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    siteHeader.style.filter = "blur(0px)"
    siteHero.style.filter = "blur(0px)"
})
