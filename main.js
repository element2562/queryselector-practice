let headerSelector = document.querySelector(".article__header");
headerSelector.textContent = "Welcome the Jacob Henderson Blog";

let allHeaderSelector = document.querySelectorAll(".article__header");
for (let i = 0; i < allHeaderSelector.length; i++) {
    allHeaderSelector[i].setAttribute("class", "article__header important");
}