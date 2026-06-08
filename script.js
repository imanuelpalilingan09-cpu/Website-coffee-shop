// Navbar berubah saat scroll
window.addEventListener("scroll", function(){

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.background = "#1a0f09";
  } else {
    nav.style.background = "rgba(32, 18, 12, 0.8)";
  }

});


// Animasi card saat halaman dibuka
const cards = document.querySelectorAll(
  '.menu-card, .testimonial-card'
);

cards.forEach((card, index) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {

    card.style.transition = "0.8s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";

  }, 300 * index);

});

// ================= LOADING SCREEN =================

window.addEventListener("load", function(){

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);

});

// ================= TESTIMONI =================

// AMBIL ELEMENT
const tombolKirim =
document.getElementById("kirimTestimoni");

const hasilTestimoni =
document.getElementById("hasilTestimoni");

const semuaBintang =
document.querySelectorAll(".star");

let ratingDipilih = 0;


// PILIH RATING
semuaBintang.forEach((bintang) => {

  bintang.addEventListener("click", () => {

    ratingDipilih =
    bintang.getAttribute("data-value");

    semuaBintang.forEach((s) => {

      s.style.opacity = "0.3";

    });

    for(let i = 0; i < ratingDipilih; i++){

      semuaBintang[i].style.opacity = "1";

    }

  });

});


// LOAD TESTIMONI SAAT WEBSITE DIBUKA
window.addEventListener("DOMContentLoaded", () => {

  const dataTersimpan =
  JSON.parse(localStorage.getItem("testimoni")) || [];

  dataTersimpan.forEach((item) => {

    tampilkanTestimoni(
      item.nama,
      item.komentar,
      item.rating
    );

  });

});


// TOMBOL KIRIM
tombolKirim.addEventListener("click", () => {

  // AMBIL INPUT
  const nama =
  document.getElementById("namaUser").value;

  const komentar =
  document.getElementById("komentarUser").value;

  // VALIDASI
  if(
    nama === "" ||
    komentar === "" ||
    ratingDipilih == 0
  ){

    alert("Lengkapi nama, komentar, dan rating ⭐");

    return;

  }

  // TAMPILKAN
  tampilkanTestimoni(
    nama,
    komentar,
    ratingDipilih
  );

  // SIMPAN KE LOCAL STORAGE
  const dataLama =
  JSON.parse(localStorage.getItem("testimoni")) || [];

  dataLama.unshift({

    nama: nama,
    komentar: komentar,
    rating: ratingDipilih

  });

  localStorage.setItem(
    "testimoni",
    JSON.stringify(dataLama)
  );

  // RESET FORM
  document.getElementById("namaUser").value = "";

  document.getElementById("komentarUser").value = "";

  ratingDipilih = 0;

  semuaBintang.forEach((s) => {

    s.style.opacity = "1";

  });

});


// FUNCTION TAMPILKAN TESTIMONI
function tampilkanTestimoni(
  nama,
  komentar,
  rating
){

  const card =
  document.createElement("div");

  card.classList.add("testimonial-card");

  let bintangHTML = "";

  for(let i = 0; i < rating; i++){

    bintangHTML += "⭐";

  }

  card.innerHTML = `

    <div class="testimonial-rating">
      ${bintangHTML}
    </div>

    <p>"${komentar}"</p>

    <h4>- ${nama}</h4>

  `;

  hasilTestimoni.prepend(card);

}

// ================= ORDER =================

const orderButton =
document.getElementById("orderButton");

orderButton.addEventListener("click", () => {

  const name =
  document.getElementById("customerName").value;

  const menu =
  document.getElementById("menuSelect").value;

  if(name === "" || menu === ""){

    alert("Isi nama dan pilih menu ☕");

    return;

  }

  // POPUP SUCCESS
const successPopup =
document.getElementById("successPopup");

const closeSuccess =
document.getElementById("closeSuccess");

// TAMPILKAN POPUP
successPopup.classList.add("show");

// TUTUP POPUP
closeSuccess.addEventListener("click", () => {

  successPopup.classList.remove("show");

});

});