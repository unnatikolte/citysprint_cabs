// Hamburger menu logic (header is directly included in HTML now)
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("mobile-overlay");

  if (hamburger && navMenu && overlay) {
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
  }

  // Route search filter logic
  const searchInput = document.getElementById("routeSearchInput");
  const routeCards = document.querySelectorAll(".route-card");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();

      routeCards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });
  }

  // FAQ toggle logic
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
      faqCards.forEach(other => {
        if (other !== card) other.classList.remove("active");
      });
    });
  });
});
