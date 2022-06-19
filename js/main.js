var elHeader = document.querySelector(".header__container");
var elBtn = document.querySelector(".header__burger");

elBtn.addEventListener("click", function (avt) {
    elHeader.classList.toggle("header__container--active")
})


