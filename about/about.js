// Hamburger menu logic (header is directly included in the HTML now)
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("mobile-overlay");

  if (!hamburger || !navMenu || !overlay) return;

  function toggleMenu() {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active", isActive);
    overlay.classList.toggle("active", isActive);
    hamburger.setAttribute("aria-expanded", isActive);
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    });
  });
});
