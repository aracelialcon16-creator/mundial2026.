window.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector("#mainNav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll("#navbarResponsive a");

  if (!mainNav || !navToggle) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
