const text = `Makasih juga telah memberikan kasih sayang yg amat besar, makasih juga pernah menjadi rumah yg nyaman untuk orang kayak didi.\nMaaf ya didi mungkin belum bisa jadi seseorang yang bisa buat cici seneng waktu kita bersama. \nTapi didi harap cici jauuuh lebih nyaman dengan kehidupan yang sekarang. mamnya jangan telat yuss ya.`;

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
    window.location.href = "index3.html";
  }, 500);
};
