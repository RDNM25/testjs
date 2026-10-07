var nama = prompt("Masukkan nama Anda: ");
var nilaiTugas = parseFloat(prompt("Masukkan nilai tugas: "));
var nilaiUTS = parseFloat(prompt("Masukkan nilai UTS: "));
var nilaiUAS = parseFloat(prompt("Masukkan nilai UAS: "));

var nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUTS * 0.3) + (nilaiUAS * 0.4);

var status = nilaiAkhir >= 75 ? "LULUS" : "TIDAK LULUS";

var output =
    "Nama\t: " + nama + "\n" +
    "Nilai Akhir: " + nilaiAkhir + "\n" +
    "Status\t: " + status;

document.getElementById("output").textContent = output;
console.log(output);