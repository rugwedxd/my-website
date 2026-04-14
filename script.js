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
}const texts = [
  "I'm a C/C++ Developer.",
  "I'm a Python Developer.",
  "I'm a Video Editor.",
  "I'm a Minecraft Player.",
  "I'm a Student.",
  "I'm a Frontend Developer."
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  if (!isDeleting) {
    currentText = texts[index].substring(0, charIndex++);
  } else {
    currentText = texts[index].substring(0, charIndex--);
  }

  typingElement.textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === texts[index].length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


