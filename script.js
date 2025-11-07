// --- Configuração das fotos e vídeos ---
const images = [
  "fotos/WhatsApp Image 2025-10-14 at 11.07.34 (1).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.07.34 (2).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.07.34 (3).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.07.34 (4).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.07.34.jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.45.55 (1).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.45.55 (3).jpeg",
  "fotos/whatsApp Image 2025-10-14 at 11.45.54.jpeg",
  "fotos/WhatsApp Image 2025-10-14 at 11.45.55 (2).jpeg",
];

const videos = [
  "WhatsApp Video 2025-10-14 at 12.37.17.mp4"
];

// --- Galeria de fotos ---
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

// --- Galeria de vídeos ---
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

// --- Música de fundo ---
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