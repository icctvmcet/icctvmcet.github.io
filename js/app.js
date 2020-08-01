const hamburger = () => {
  var element = document.getElementById("hamburger");
  var navList = document.querySelector("#mobile-nav");
  var ayat = document.querySelector(".ayat-section");

  navList.classList.toggle("nav-animate");
  element.classList.toggle("is-active");
  ayat.classList.toggle("blur");
};

document.querySelector(".home-page").style.display = "none";
document.querySelector(".home-page").classList.add("js-loading");

window.addEventListener("load", function () {
  document
    .querySelector(".loader-wrapper")
    .classList.add("loader-wrapper-remove");
  document.querySelector(".home-page").style.display = "inline";
  document.querySelector(".home-page").classList.remove("js-loading");
});

const redirect = (pageName) => {
  console.log(pageName);
};

AOS.init({
  duration: 1200,
});
