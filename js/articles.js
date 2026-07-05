/**
 * OPVERSE OHARA — Data Artikel
 * ============================================================
 * CARA MENAMBAH ARTIKEL BARU:
 *
 * 1. Salin satu blok { ... } di bawah
 * 2. Tempel di bagian ATAS array (artikel terbaru di atas)
 * 3. Ganti semua field sesuai kontenmu
 * 4. Simpan file — otomatis muncul di homepage dan halaman artikel
 *
 * Field yang WAJIB diisi: id, title, date, category, excerpt, content
 * Field OPSIONAL: image, tags, author
 * ============================================================
 */

const ARTICLES = [
  {
    id: "sejarah-void-century",
    title: "Misteri Void Century: 100 Tahun yang Dihapus dari Sejarah",
    date: "2025-07-05",
    category: "Teori & Lore",
    author: "Tim Ohara",
    image: "", // URL gambar, kosongkan jika belum ada
    tags: ["Void Century", "Poneglyph", "World Government", "Sejarah"],
    excerpt:
      "Seratus tahun yang dihapus dari sejarah dunia — siapa yang memutuskan untuk menghapusnya, dan apa yang benar-benar terjadi? Kita bedah semua petunjuk yang tersebar dari Robin hingga Joy Boy.",
    content: `
      <p>Void Century adalah salah satu misteri terbesar dalam dunia One Piece. Selama 100 tahun yang terhapus dari sejarah resmi, sesuatu terjadi yang begitu besar sehingga World Government memutuskan untuk menghapusnya dari semua catatan sejarah.</p>

      <h2>Apa itu Void Century?</h2>
      <p>Void Century merujuk pada periode sekitar 800-900 tahun sebelum cerita One Piece berlangsung. Selama periode inilah kerajaan-kerajaan dunia bersatu membentuk World Government yang kita kenal sekarang — dan menghapus segala bukti tentang apa yang terjadi sebelumnya.</p>

      <h2>Bukti yang Tersisa: Poneglyph</h2>
      <p>Satu-satunya catatan yang tersisa adalah Poneglyph — batu berukir raksasa yang terbuat dari material tak bisa dihancurkan. World Government melarang keras siapa pun mempelajari atau menerjemahkan Poneglyph, bukti betapa berbahayanya informasi yang tersimpan di dalamnya.</p>

      <blockquote>
        "Satu-satunya cara mengetahui kebenaran sejarah adalah membaca Poneglyph. Itulah mengapa Ohara dihancurkan." — Nico Robin
      </blockquote>

      <h2>Joy Boy dan Perjanjian yang Gagal</h2>
      <p>Dari catatan yang ada, kita tahu bahwa ada seseorang bernama Joy Boy yang membuat perjanjian dengan Fishman Island selama Void Century. Perjanjian itu gagal dipenuhi — dan Joy Boy meninggalkan permintaan maaf yang terukir di Road Poneglyph Fishman Island.</p>

      <p>Artikel ini akan terus diupdate seiring info baru dari manga.</p>
    `,
  },
  {
    id: "kekuatan-admiral-baru",
    title: "Admiral Baru vs Yonko: Siapa yang Lebih Kuat?",
    date: "2025-06-28",
    category: "Power Level",
    author: "Tim Ohara",
    image: "",
    tags: ["Admiral", "Yonko", "Power Level", "Marines"],
    excerpt:
      "Dengan munculnya admiral-admiral baru pasca Timeskip, pertanyaan klasik kembali: apakah level admiral setara Yonko? Kita analisis semua pertarungan dan datapoint yang ada.",
    content: `
      <p>Pertanyaan soal power level antara Admiral dan Yonko sudah diperdebatkan sejak era Marineford. Sekarang dengan lebih banyak data, mari kita analisis lebih dalam.</p>

      <h2>Data dari Marineford</h2>
      <p>Di Marineford, kita melihat tiga Admiral (Aokiji, Akainu, Kizaru) berhadapan dengan pasukan Whitebeard. Whitebeard sendiri, meski sudah tua dan sakit, masih bisa menahan mereka semua.</p>

      <h2>Kesimpulan Sementara</h2>
      <p>Berdasarkan bukti yang ada, level Admiral dan Yonko bisa dianggap setara dalam konteks one-on-one, tapi Yonko memiliki keunggulan dalam hal Haki Conqueror dan faktor "kekuatan kemauan" yang sering menjadi penentu di pertarungan puncak One Piece.</p>
    `,
  },
  {
    id: "buah-iblis-terlangka",
    title: "5 Buah Iblis Paling Langka dan Berbahaya di One Piece",
    date: "2025-06-15",
    category: "Devil Fruit",
    author: "Tim Ohara",
    image: "",
    tags: ["Devil Fruit", "Logia", "Paramecia", "Zoan"],
    excerpt:
      "Dari Gura Gura no Mi yang bisa menghancurkan dunia hingga Ope Ope no Mi sang 'Buah Operasi Tertinggi' — inilah buah iblis yang paling ditakuti dan diperebutkan di seluruh Grand Line.",
    content: `
      <p>Dunia One Piece dipenuhi ratusan buah iblis dengan kemampuan unik. Tapi di antara semuanya, ada yang benar-benar beda levelnya — baik karena kelangkaannya, bahayanya, atau nilainya.</p>

      <h2>1. Gura Gura no Mi — Buah Gempa</h2>
      <p>Dimiliki Whitebeard, kemudian direbut Blackbeard. Buah ini mampu menciptakan gempa dan tsunami yang bisa menghancurkan seluruh pulau. Sengoku sendiri menyebut Whitebeard sebagai "manusia yang bisa menghancurkan dunia."</p>

      <h2>2. Ope Ope no Mi — Buah Operasi</h2>
      <p>Dimiliki Trafalgar Law. Buah ini disebut sebagai "Buah Iblis Tertinggi" karena kemampuan penggunanya yang tak terbatas dalam sebuah "ruang operasi." Yang paling menakutkan: penggunanya bisa memberikan keabadian kepada orang lain, dengan harga nyawa mereka sendiri.</p>

      <h2>3. Yami Yami no Mi — Buah Kegelapan</h2>
      <p>Buah Logia yang dimiliki Blackbeard. Unik karena tidak memberikan kebal fisik seperti Logia lain, tapi mampu menyerap dan meniadakan kekuatan buah iblis siapapun.</p>
    `,
  },
  {
    id: "nakama-luffy-masa-depan",
    title: "Prediksi Nakama Terakhir Luffy Sebelum Cerita Berakhir",
    date: "2025-06-01",
    category: "Teori & Lore",
    author: "Tim Ohara",
    image: "",
    tags: ["Straw Hat", "Nakama", "Teori", "Luffy"],
    excerpt:
      "Oda sudah memberikan petunjuk siapa nakama selanjutnya? Kita analisis semua karakter yang paling kuat kandidatnya untuk bergabung dengan Straw Hat Pirates.",
    content: `
      <p>Salah satu tradisi One Piece yang paling dinantikan adalah rekrutmen nakama baru. Setiap anggota Straw Hat membawa keahlian unik dan cerita latar yang dalam. Siapa yang selanjutnya?</p>

      <h2>Kandidat Terkuat: Yamato</h2>
      <p>Yamato sudah mendeklarasikan dirinya sebagai "Oden" dan ingin ikut berlayar seperti Oden. Dengan kekuatan Mythical Zoan Inu Inu no Mi Model Okuchi no Makami, dia salah satu karakter terkuat yang pernah hampir bergabung dengan Straw Hat.</p>

      <h2>Dark Horse: Carrot</h2>
      <p>Meskipun kini menjadi pemimpin Mink Tribe, Carrot sudah berlayar bersama Straw Hat cukup lama. Banyak fan percaya ini belum berakhir.</p>
    `,
  },
  {
    id: "grand-line-dijelaskan",
    title: "Grand Line: Mengapa Rute Paling Berbahaya di Dunia Ini Bisa Dilayari?",
    date: "2025-05-20",
    category: "World Building",
    author: "Tim Ohara",
    image: "",
    tags: ["Grand Line", "New World", "Log Pose", "Dunia"],
    excerpt:
      "Grand Line dengan cuaca yang gila, pulau-pulau misterius, dan monster laut terkuat — bagaimana para navigator bisa melayarinya? Kita bedah sains dan lore di balik rute paling ikonik dalam anime.",
    content: `
      <p>Grand Line adalah jantung dari cerita One Piece. Rute yang membelah dunia dari timur ke barat ini dikenal sebagai "mimpi buruk pelaut" sekaligus "surga para bajak laut." Apa yang membuatnya begitu istimewa?</p>

      <h2>Anomali Magnetik</h2>
      <p>Grand Line memiliki medan magnet yang sangat kuat dan tidak stabil. Kompas biasa tidak berfungsi di sini. Itulah mengapa navigator membutuhkan Log Pose — alat yang merekam medan magnet pulau dan memandu pelaut dari satu pulau ke pulau berikutnya.</p>

      <h2>Cuaca yang Mustahil</h2>
      <p>Di Grand Line, bisa terjadi badai salju dan tornado dalam waktu yang sama. Cuaca berubah dalam hitungan menit. Ini bukan hiper-bola — ada penjelasan lore bahwa Grand Line berada di titik pertemuan arus udara dari seluruh dunia.</p>

      <h2>New World: Level Berikutnya</h2>
      <p>Bagian kedua Grand Line — New World — bahkan lebih ekstrem. Di sini, Log Pose standar tidak cukup. Dibutuhkan New World Log Pose yang bisa membaca tiga pulau sekaligus karena pulau-pulau di New World bergerak.</p>
    `,
  },
];

/**
 * KATEGORI — daftar kategori untuk filter di homepage.
 * Tambahkan kategori baru di sini jika kamu membuat kategori baru di artikel.
 */
const CATEGORIES = [
  "Semua",
  "Teori & Lore",
  "Power Level",
  "Devil Fruit",
  "World Building",
  "Review Arc",
  "Karakter",
  "News & Update",
];

// Jangan ubah bagian di bawah ini
if (typeof module !== "undefined") module.exports = { ARTICLES, CATEGORIES };
