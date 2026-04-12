function openPopup(src) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popupImg");

  popup.style.display = "flex";
  img.src = src;

  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 10);
}

function closePopup() {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popupImg");

  img.style.transform = "scale(0.8)";
  setTimeout(() => {
    popup.style.display = "none";
  }, 200);
}
