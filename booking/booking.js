// Hamburger menu logic (header is directly included in HTML)
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

// Booking form WhatsApp integration
const form = document.getElementById('bookingForm');
const whatsappNumber = '919152489191';

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  const vehicle = document.getElementById('vehicleName').value;
  const name = document.getElementById('customerName').value;
  const phone = document.getElementById('contactNumber').value;
  const date = document.getElementById('pickupDate').value;
  const time = document.getElementById('pickupTime').value;
  const pickup = document.getElementById('pickupLocation').value;
  const drop = document.getElementById('dropLocation').value;
  const passengers = document.getElementById('passengerCount').value;
  const trip = document.getElementById('tripType').value;
  const notes = document.getElementById('specialNotes').value;

  const msg = `Hi CitySprint Cabs,\nI want to book a ${vehicle}.\nName: ${name}\nPhone: ${phone}\nPickup: ${pickup} at ${time} on ${date}\nDrop: ${drop || 'N/A'}\nPassengers: ${passengers || 'N/A'}\nTrip Type: ${trip || 'N/A'}\nNotes: ${notes || 'None'}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
