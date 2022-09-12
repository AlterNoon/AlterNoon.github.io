console.log("Ini adalah web sederhana yang dibuat oleh saya sendiri");

const firstName = prompt("Selamat Datang di Optik Naura, Silahkan Tulis Nama :");
const umur = prompt("Umur berapa anda?");
const sakit = prompt("Apakah keluhan anda rabun jauh atau rabun dekat? jika tidak ketik tidak");

const user = {
    name: {
        first: firstName,
        last: umur,
    },
    keluhan: sakit
};

if (user.keluhan === "rabun jauh") {
    alert("Terima Kasih, Silahkan lihat web kami untuk melihat lensa rabun jauh " + user.name.first + " ,umur : " + user.name.last);
} else if (user.keluhan === "rabun dekat") {
    alert("Terima Kasih, Silahkan lihat web kami untuk melihat lensa rabun dekat " + user.name.first + " ,umur : " + user.name.last);
} else {
    alert("Terima Kasih, Mata anda normal.  " + user.name.first + " ,umur : " + user.name.last);
}