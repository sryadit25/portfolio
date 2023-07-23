function openWhatsApp() {
  const phoneNumber = "6283878682514";
  const productMessage = "Halo, saya tertarik untuk membeli produk Anda.";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    productMessage
  )}`;
  // Open WhatsApp in a new tab
  window.open(url, "_blank");
}

function downloadPdf() {
  // Ganti URL_PDF dengan URL atau path file PDF yang ingin Anda unduh
  const URL_PDF = "UC-cb7d3b62-5d7c-4a5f-9e07-9afe075548ff.pdf";

  // Membuat elemen <a> baru dengan atribut download
  const downloadLink = document.createElement("");
  downloadLink.href = URL_PDF;
  downloadLink.download = "UC-cb7d3b62-5d7c-4a5f-9e07-9afe075548ff.pdf"; // Nama file saat diunduh (bisa diganti sesuai keinginan)

  // Simulasikan klik pada elemen <a> untuk memulai pengunduhan
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
