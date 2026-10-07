var pembeli = prompt("Masukkan nama pembeli:");
var jumlahJenis = parseInt(prompt("Jumlah jenis barang:"));

var totalBelanja = 0;

for (var i = 1; i <= jumlahJenis; i++) {
    var namaBarang = prompt("Nama barang ke-" + i + ":");
    var harga = parseFloat(prompt("Harga " + namaBarang + ":"));
    var jumlah = parseInt(prompt("Jumlah " + namaBarang + ":"));

    var subtotal = harga * jumlah;
    totalBelanja += subtotal;

    console.log(namaBarang + " x" + jumlah + " = " + formatRupiah(subtotal));
}

var diskon = totalBelanja >= 50000 ? totalBelanja * 0.1 : 0;
var totalBayar = totalBelanja - diskon;

function formatRupiah(angka) {
    var bulat = Math.round(Math.abs(angka)).toString();
    var tanda = angka < 0 ? "-" : "";
    return "Rp" + tanda + bulat.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var output =
    "Pembeli".padEnd(14) + ": " + pembeli + "\n" +
    "Total Belanja".padEnd(14) + ": " + formatRupiah(totalBelanja) + "\n" +
    "Diskon".padEnd(14) + ": " + formatRupiah(diskon) + "\n" +
    "Total Bayar".padEnd(14) + ": " + formatRupiah(totalBayar);

document.getElementById("output").textContent = output;
console.log(output);