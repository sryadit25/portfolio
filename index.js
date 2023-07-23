function openWhatsApp() {
  const phoneNumber = "6283878682514";
  const productMessage = "Halo, saya tertarik untuk membeli produk Anda.";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    productMessage
  )}`;
  // Open WhatsApp in a new tab
  window.open(url, "_blank");
}

function composeEmail() {
  const recipient = "sryadit5@gmail.com"; // Ganti dengan alamat email tujuan
  const subject = "Subjek Email";
  const body = "Isi email Anda disini...";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Buka halaman komposisi email dalam tab baru
  window.open(mailtoLink, "_blank");
}
