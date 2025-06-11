let noClickCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const img = document.querySelector("img");  
const question = document.querySelector(".question");

const gifList = [
  "images/anya-forger-jumpscare.gif",
  "images/shock.gif",
  "images/nope.gif",
  "images/anya-spy-x-family-anime-anya-crying.gif",
  "images/crazy.gif",
  "images/gotem.gif",
  "images/love.gif"
];

function startCelebration() {
  const container = document.getElementById("celebration-container");
  const symbols = ["💖", "💘", "✨", "💙", "💗", "💚", "💛", "💜", "♥️"];

  function spawnItem() {
    const item = document.createElement("div");
    item.classList.add("celebration-item");
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = 2 + Math.random() * 2 + "s";
    item.style.fontSize = 20 + Math.random() * 20 + "px";

    container.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 4000);
  }

  // Spawn items continuously
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      spawnItem();
    }
  }, 300); // Every 300ms, 5 more floating emojis are added
}

function answerYes() {
  img.src = gifList[6];
  question.textContent = "I LOVE YOU TOO BEBEEE!! 🥳🎉🎉";
  yesBtn.remove();
  noBtn.remove();
  startCelebration();
  
  const loveSong = document.getElementById("loveSong");
  loveSong.play();
}

function answerNo() {
  noClickCount++;

  if (noClickCount < 5) {
    const yesScale = 1 + noClickCount * 0.2;
    const noScale = 1 - noClickCount * 0.2;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;
  }
  
  if (noClickCount == 1) {
    question.textContent = "GONGGG 😨!! Do you love me?";
    img.src = gifList[1];
    const shocksound = document.getElementById("shocksound");
    shocksound.play();
  }

  if (noClickCount == 2) {
    img.src = gifList[2];
    question.textContent = "I believe you pressed the wrong button... Do you love me?";
    const blink = document.getElementById("blink");
    blink.play();
    shocksound.pause();
  }

  if (noClickCount == 3) {
    img.src = gifList[3];
    question.textContent = "PLEEEEASE WHY ARE YOU PRESSING NOO??? DO YOU LOVE ME???";
    const cry = document.getElementById("cry");
    cry.play();
    blink.pause();
  }

  if (noClickCount == 4) {
    img.src = gifList[4]
    question.textContent = "DO YOU LOVE MEEEEEEEEEEEEEEEEÉEEEEEÊEEEEEEEEEEĒEEEEEEEĘ";
    const scary = document.getElementById("scary");
    scary.play();
    cry.pause();
  }

  if (noClickCount == 5) {
    img.src = gifList[5]
    question.textContent = "Do you love me?";
    yesBtn.style.transform = "scale(1)";
    noBtn.style.transform = "scale(1)";
    noBtn.textContent = "Yes";
    noBtn.style.backgroundColor = "#3f8f29";
    noBtn.onclick = answerYes;
    const laugh = document.getElementById("laugh");
    laugh.play();
    scary.pause();
  }
}

const volumeOnIcon = document.getElementById("volumeOn");
const volumeOffIcon = document.getElementById("volumeOff");

let isMuted = false;

function toggleMute() {
  isMuted = !isMuted;

  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.muted = isMuted;
  });

  if (isMuted) {
    volumeOnIcon.style.display = "none";
    volumeOffIcon.style.display = "inline";
  } else {
    volumeOnIcon.style.display = "inline";
    volumeOffIcon.style.display = "none";
  }
}

volumeOnIcon.addEventListener("click", toggleMute);
volumeOffIcon.addEventListener("click", toggleMute);

const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", () => {
  location.reload();
});