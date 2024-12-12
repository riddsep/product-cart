# Deskripsi Proyek

Proyek ini adalah sebuah aplikasi belanja sederhana untuk dessert yang memungkinkan pengguna untuk:

- Melihat daftar produk dessert yang tersedia.
- Menambahkan produk ke dalam keranjang belanja.
- Mengurangi jumlah produk dari keranjang belanja.
- Melihat total harga dari produk dalam keranjang.
- Melakukan konfirmasi pesanan.

# Fitur Utama

1. **Tampilan Produk:**
   - Daftar produk dessert dengan informasi nama, kategori, stok, harga, dan gambar.
   - Indikator jika stok produk habis.
2. **Keranjang Belanja:**

   - Menampilkan produk yang telah ditambahkan ke keranjang beserta jumlahnya.
   - Menghitung total harga dari produk dalam keranjang.
   - Tombol untuk mengonfirmasi pesanan.

3. **Konfirmasi Pesanan:**
   - Modal yang muncul untuk mengonfirmasi detail pesanan.
   - Opsi untuk memulai pesanan baru setelah konfirmasi.

# Teknologi yang Digunakan

- **React.js:** Framework JavaScript untuk membangun antarmuka pengguna.
- **Tailwind CSS:** Library untuk styling komponen.
- **Lucide-react:** Library ikon untuk React.

# Struktur Komponen

1. **`App`:** Komponen utama yang mengatur state untuk daftar produk, keranjang belanja, dan modal konfirmasi.
2. **`ProductList`:** Menampilkan daftar produk.
3. **`ProductItem`:** Komponen individual untuk setiap produk.
4. **`CartProduct`:** Menampilkan produk yang ditambahkan ke keranjang belanja.
5. **`Total`:** Menghitung total harga dari produk dalam keranjang.
6. **`Modal`:** Menampilkan modal konfirmasi pesanan.
7. **`Button`:** Komponen tombol yang dapat digunakan kembali.

# Cara Menjalankan Proyek

1. **Clone repositori:**

   ```bash
   git clone https://github.com/riddsep/product-cart.git
   ```

2. **Masuk ke direktori proyek:**

   ```bash
   cd product-cart
   ```

3. **Install dependensi:**

   ```bash
   npm install
   ```

4. **Jalankan aplikasi:**

   ```bash
   npm run dev
   ```

# Cara Menggunakan

1. Lihat daftar produk yang tersedia.
2. Klik ikon "+" untuk menambahkan produk ke keranjang belanja.
3. Klik ikon "-" untuk mengurangi jumlah produk di keranjang.
4. Klik "Confirm Order" untuk melihat detail pesanan di modal.
5. Klik "Start Order" di modal untuk menyelesaikan pesanan.

# Struktur Folder

```
.
├── public
│   ├── image-[nama_produk]-desktop.jpg  // Gambar desktop produk
│   ├── image-[nama_produk]-thumbnail.jpg // Thumbnail produk
│   └── illustration-empty-cart.svg      // Ilustrasi keranjang kosong
├── src
│   ├── App.js                           // Komponen utama aplikasi
│   ├── index.js                         // Entry point aplikasi
│   └── styles.css                       // Styling tambahan
```

# Catatan Tambahan

- Produk yang ditambahkan ke keranjang akan menyesuaikan dengan stok yang tersedia.
- Ketika pesanan dikonfirmasi, stok produk akan diperbarui sesuai jumlah yang dipesan.

# Kontributor

- **Nama:** [Rido Septiawan]
