function openWhatsApp() {
  const phoneNumber = "6283878682514";
  const productMessage = "Halo, saya tertarik untuk membeli produk Anda.";

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    productMessage
  )}`;

  // Buka halaman WhatsApp dalam tab baru
  location.href = url;
}

document.querySelector("#hireMe").onclick = function () {
  const url = `hireme.html`;
  location.href = url;
};

function simulateLoading() {
  // Tampilkan elemen spinner
  document.querySelector(".spinner-container").style.display = "block";

  // Jalankan fungsi untuk menyembunyikan spinner setelah 3 detik
  setTimeout(hideSpinner, 3000);
}

function hideSpinner() {
  // Sembunyikan elemen spinner
  document.querySelector(".spinner-container").style.display = "none";
}
