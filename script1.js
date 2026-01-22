const text = `Happy birthday ya cicii, semoga hal-hal baik selalu beriringan dengan cici. Teruslah tumbuh, didi akan melihat cici berproses dengan jarak yang paling jauh dan akan selalu menjadi orang yang paling bangga di setiap proses cici.\nDidi juga mau ngucapin terimakasih karena cici pernah jadi alasan untuk semangat belajar.\n\n`;

let index = 0;
const speed = 50;

window.onload = function () {
  document.getElementById("introText").style.display = "none";

  const letterBox = document.getElementById("letterBox");
  letterBox.style.display = "block";

  typeText();
};

function typeText() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML +=
      text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    // teks selesai → tampilkan tombol Next
    document.getElementById("nextBtn").classList.add("show");
  }
}

// aksi tombol next
document.getElementById("nextBtn").onclick = function () {
  document.getElementById("letterBox").classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "index2.html";
  }, 500);
};
