document.querySelectorAll(".lista a").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".lista .active").classList.remove("active");
    element.parentElement.classList.add("active");
  });
});
