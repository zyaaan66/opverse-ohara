# ☠ Opverse Ohara — Portal One Piece

Link Demo : https://zyaaan66.github.io/opverse-ohara/
---

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository di GitHub

1. Buka [github.com](https://github.com) → login
2. Klik tombol **"New repository"** (tombol hijau kanan atas)
3. Isi nama repo: `opverse-ohara` (atau nama apapun)
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2 — Upload File

**Cara mudah (via web browser):**
1. Di halaman repo yang baru dibuat, klik **"uploading an existing file"**
2. Drag semua file dan folder ini ke sana:
   - `index.html`
   - `article.html`
   - `404.html`
   - `README.md`
   - folder `css/`
   - folder `js/`
3. Klik **"Commit changes"**

**Cara via Git (terminal):**
```bash
git init
git add .
git commit -m "Initial commit: Opverse Ohara"
git branch -M main
git remote add origin https://github.com/USERNAME/opverse-ohara.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages

1. Di repo GitHub-mu → klik tab **Settings**
2. Di sidebar kiri, klik **Pages**
3. Di bagian "Source" → pilih **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Klik **Save**
6. Tunggu 1-2 menit → situsmu akan aktif di:
   `https://USERNAME.github.io/opverse-ohara/`

---

## ✍ Cara Menambah Artikel Baru

Buka file **`js/articles.js`** — semua artikel ada di sini.

### Format satu artikel:

```javascript
{
  id: "judul-artikel-dengan-strip",      // WAJIB: ID unik, tanpa spasi
  title: "Judul Artikel Lengkap",         // WAJIB: judul tampil
  date: "2025-07-05",                     // WAJIB: format YYYY-MM-DD
  category: "Teori & Lore",              // WAJIB: pilih dari daftar kategori
  author: "Tim Ohara",                    // opsional
  image: "",                              // opsional: URL gambar
  tags: ["Tag1", "Tag2", "Tag3"],         // opsional tapi dianjurkan
  excerpt: "Ringkasan singkat artikel...",// WAJIB: muncul di kartu homepage
  content: `
    <p>Paragraf pertama...</p>
    <h2>Sub-judul</h2>
    <p>Paragraf kedua...</p>
    <blockquote>Kutipan dari karakter One Piece</blockquote>
  `,                                      // WAJIB: konten HTML lengkap
},
```

### Langkah-langkah:

1. Buka `js/articles.js`
2. Di dalam array `ARTICLES = [`, **tambahkan blok artikel baru di PALING ATAS** (agar artikel terbaru muncul pertama)
3. Isi semua field yang dibutuhkan
4. Simpan file
5. Upload ke GitHub → artikel otomatis muncul

### Daftar kategori yang tersedia:
- `Teori & Lore`
- `Power Level`
- `Devil Fruit`
- `World Building`
- `Review Arc`
- `Karakter`
- `News & Update`

Ingin kategori baru? Tambahkan di array `CATEGORIES` di file yang sama.

---

## 📁 Struktur File

```
opverse-ohara/
├── index.html          ← Homepage + daftar artikel
├── article.html        ← Halaman artikel tunggal (1 file untuk semua artikel)
├── 404.html            ← Halaman not found
├── README.md           ← Panduan ini
├── css/
│   └── style.css       ← Semua styling
└── js/
    ├── articles.js     ← ⭐ DATA SEMUA ARTIKEL (edit di sini untuk tambah konten)
    ├── main.js         ← Logika homepage (filter, pagination, search)
    └── article.js      ← Logika halaman artikel
```

---

## 🎨 Kustomisasi Tampilan

Buka `css/style.css` → bagian `:root` di paling atas untuk ganti warna:

```css
:root {
  --navy:     #0d1b2a;   /* warna latar gelap */
  --gold:     #c9a84c;   /* warna aksen emas */
  --red:      #c0392b;   /* warna label kategori */
  --bg-page:  #f0e6d3;   /* warna latar halaman */
}
```

---

## ❓ FAQ

**Artikel tidak muncul setelah saya tambah?**
→ Pastikan format `id` unik dan tidak ada koma yang ketinggalan setelah kurung kurawal tutup `}`.

**Gambar tidak muncul?**
→ Gunakan URL gambar yang bisa diakses publik (Imgur, Google Drive share link, dll). Format: `image: "https://i.imgur.com/xxxxx.jpg"`

**Ingin domain sendiri?**
→ Di GitHub Pages Settings → Custom domain → masukkan domain-mu.

---

*One Piece © Eiichiro Oda / Shueisha. Fan-made, non-profit.*
