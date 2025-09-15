// Modal functionality
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// Responsive navbar toggle
const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("show"); // <-- matches CSS now
});

// Optional: close nav when a link is clicked
navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});
