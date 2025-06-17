document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#333";
      header.style.backgroundImage = "none";
    } else {
      header.style.backgroundColor = "";
      header.style.backgroundImage = "linear-gradient(to right, #191970, #333)";
    }
  });
});
