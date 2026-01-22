const text = `Makasih cici pernah datang dikehidupan didi, didi seneng banget bisa kenal cici, mungkin kalo didi nda ketemu cici didi bakal bermalas-malasan terus.\nMaaf ya kalo panjang, makasih uda mau baca sampai sini, kado buat cici menyusul yakk, semangat yus cicii nono nangis soalnya cici kalo senyum cantik kyk di next slide.`;

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
    window.location.href = "flower.html";
  }, 500);
};
