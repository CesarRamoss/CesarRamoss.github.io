(function () {
  let menu = document.querySelector(".navbar");
  let container = document.querySelector(".container");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      menu.classList.add("nav-aux");
      container.classList.add("container-aux");
    } else {
      menu.classList.remove("nav-aux");
      container.classList.remove("container-aux");
    }
  });
})();
