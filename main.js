const cardContainer = document.getElementById("cards-container")
// Animation for Introduction
const detail = document.getElementById("detail")
detail.addEventListener("mouseenter", function(){
    detail.textContent = "I LIKE TO BUILD AND MAINTAIN SCALABLE WEBSITES AND APPLICATIONS"
    detail.classList.add("animate-in")
})
detail.addEventListener("mouseout", function(){
    detail.textContent = "I'M A WEB DEVELOPER AND DESIGNER BASED IN THE UNITED STATES"
    detail.classList.add("animate-out")
})