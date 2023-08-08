window.addEventListener("scroll", function () {
    var image = document.getElementById("#boy-image");
    var scrollPosition = window.scrollY;
    image.style.top = scrollPosition + "px";
});