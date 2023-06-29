document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach(function (container) {
    const image = container.querySelector(".image");
    const caption = container.querySelector(".caption");
    container.addEventListener("mouseover", function () {
      caption.style.opacity = 1;
    });
    container.addEventListener("mouseout", function () {
      caption.style.opacity = 0;
    });
    container.addEventListener("click", function () {
      image.style.opacity = 0.3;
      setTimeout(function () {
        image.style.opacity = 1;
      }, 500);
    });
  });
});
