function openWhatsApp() {
  const phoneNumber = "6283878682514";
  const productMessage = "Halo, saya tertarik untuk membeli produk Anda.";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    productMessage
  )}`;
  // Open WhatsApp in a new tab
  window.open(url, "_blank");
}

document.querySelector("#hireMe").onclick = function () {
  const url = "hireme.html";
  location.href = url;
};

function simulateLoading() {
  document.querySelector(".spinner-container").style.display = "block";

  setTimeout(hideSpinner, 3000);
}

function hideSpinner() {
  document.querySelector(".spinner-container").style.display = "none";
}
