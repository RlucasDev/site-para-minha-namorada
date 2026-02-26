
const images = [
  "fotos/foto1.jpeg",
  "fotos/foto2.jpeg",
  "fotos/foto3.jpeg",
  "fotos/foto4.jpeg",
  "fotos/foto5.jpeg",
  "fotos/foto6.jpeg",
  "fotos/foto7.jpeg",
  "fotos/foto8.jpeg",
  "fotos/foto9.jpeg",
];

const videos = [
  "WhatsApp Video 2025-10-14 at 12.37.17.mp4"
];

const gallery = document.getElementById("gallery");
images.forEach(src => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Foto com Ariadna";
  card.appendChild(img);
  gallery.appendChild(card);
});


const videosDiv = document.getElementById("videos");
videos.forEach(src => {
  const card = document.createElement("div");
  card.className = "card";
  const vid = document.createElement("video");
  vid.src = src;
  vid.controls = true;
  card.appendChild(vid);
  videosDiv.appendChild(card);
});


const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusic");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    playBtn.textContent = "⏸️ Pausar música";
    isPlaying = true;
  } else {
    bgMusic.pause();
    playBtn.textContent = "🎵 Tocar música";
    isPlaying = false;
  }
});