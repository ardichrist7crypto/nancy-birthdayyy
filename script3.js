const text = `Bahagia terus ya cici semoga segala impian cici bisa terwujud, semoga segala harapan cici bisa jadi kenyataan. \nCiciii kuerenn buangett bisa sampai dititik sejauh ini, didi bangga sama cici. Semoga cita-cita cici terwujud, dan semoga tahun ini menjadi tahun yang lebih baik daritahun kemarin. Pokoknya semua yang terbaik buat cici.`;

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
    window.location.href = "index4.html";
  }, 500);
};
