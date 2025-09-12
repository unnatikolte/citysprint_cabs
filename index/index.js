// Hamburger menu logic (since header is now directly included in HTML)
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

// Parallax scroll
window.addEventListener("scroll", function () {
  const heroImage = document.querySelector(".parallax");
  if (heroImage) {
    const scrollPos = window.scrollY;
    heroImage.style.transform = `translate(-50%, calc(-50% + ${scrollPos * 0.1}px))`;
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    carCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// Count-up animation using IntersectionObserver
const counters = document.querySelectorAll('.counter');
const speed = 100;

const animateCounters = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;

      const updateCount = () => {
        const increment = target / speed;
        count += increment;

        if (count < target) {
          counter.innerText = Math.floor(count) + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCount();
      observer.unobserve(counter);
    }
  });
};

const observer = new IntersectionObserver(animateCounters, {
  threshold: 0.6
});

counters.forEach(counter => observer.observe(counter));

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

// WhatsApp Integration
const whatsappNumber = '919152489191';
const modal = document.getElementById('whatsappModal');
const closeBtn = document.querySelector('.close-btn');
const vehicleInput = document.getElementById('vehicleName');
const form = document.getElementById('bookingForm');

document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', () => {
    const vehicle = button.getAttribute('data-vehicle');
    vehicleInput.value = vehicle;
    modal.style.display = 'flex';
  });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const vehicle = vehicleInput.value;
  const name = document.getElementById('customerName').value;
  const contact = document.getElementById('contactNumber').value;
  const date = document.getElementById('pickupDate').value;
  const time = document.getElementById('pickupTime').value;
  const pickup = document.getElementById('pickupLocation').value;
  const drop = document.getElementById('dropLocation').value;
  const passengers = document.getElementById('passengerCount').value;
  const tripType = document.getElementById('tripType').value;
  const notes = document.getElementById('specialNotes').value;

  let msg = `Hi CitySprint Cabs,%0ABooking Details:%0A%0A`;
  msg += `Name: ${name}%0AContact: ${contact}%0AVehicle: ${vehicle}%0A`;
  msg += `Pickup: ${pickup} on ${date} at ${time}%0A`;
  if (drop) msg += `Drop: ${drop}%0A`;
  if (passengers) msg += `Passengers: ${passengers}%0A`;
  if (tripType) msg += `Trip Type: ${tripType}%0A`;
  if (notes) msg += `Notes: ${notes}%0A`;

  const url = `https://wa.me/${whatsappNumber}?text=${msg}`;
  window.open(url, '_blank');
  modal.style.display = 'none';
  form.reset();
});
