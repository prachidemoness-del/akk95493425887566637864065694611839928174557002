let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    document.getElementById("music").play();
    musicStarted = true;
  }
}

// Typing effect
function typeText(text, elementId) {
  let i = 0;
  let speed = 40;
  let el = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Open box
function openBox(e) {
  e.stopPropagation();
  document.querySelector(".box").style.display = "none";

  let msg = document.getElementById("message");
  msg.classList.remove("hidden");

  let text = "WARNING!! Today you're at high risk of being ambushed with kisses 💋, hugs 🤗 and way too much love 💖.\n\nHappy Birthday Divya 🎉💖";

  typeText(text, "message");

  createHeartsExplosion();

  setTimeout(() => {
    document.getElementById("cakeSection").classList.remove("hidden");
  }, 3000);

  startSlideshow();
}

// Cake cut
function cutCake() {
  createHeartsExplosion();

  document.getElementById("slideshow").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("ending").classList.remove("hidden");
  }, 6000);
}

// Slideshow
let photos = ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"];
let index = 0;

function startSlideshow() {
  let slide = document.getElementById("slide");
  slide.src = photos[0];

  setInterval(() => {
    slide.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % photos.length;
      slide.src = photos[index];
      slide.style.opacity = 1;
    }, 500);
  }, 2500);
}

// HEART EXPLOSION 💖
function createHeartsExplosion() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 50; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.font = "20px Arial";
    ctx.fillText("💖", x, y);
  }
}
