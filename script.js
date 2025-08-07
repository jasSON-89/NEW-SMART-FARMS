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
document.getElementById("navToggle").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
});
