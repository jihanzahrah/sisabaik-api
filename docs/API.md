# Sisabaik API

REST API untuk aplikasi Sisabaik yang dibangun menggunakan Node.js, Express 5, dan PostgreSQL. Proyek ini merupakan pengembangan dari database pada Chapter 6.

## 1. Prasyarat

Pastikan perangkat sudah memiliki:

- Node.js versi 22 atau lebih baru.
- npm.
- PostgreSQL yang sudah terpasang dan berjalan.
- Database `sisabaik_dev` beserta tabel dan data awal dari Chapter 6.
- Visual Studio Code untuk mengelola proyek.

## 2. Instalasi

Buka terminal pada root folder proyek `sisabaik-api`, kemudian jalankan:

```bash
npm install
```

Pastikan file `.env` sudah tersedia dan konfigurasi koneksi PostgreSQL sesuai dengan database lokal yang digunakan. Gunakan `.env.example` sebagai acuan konfigurasi.

## 3. Memeriksa Database

Jalankan perintah berikut untuk memeriksa koneksi database:

```bash
npm run db:check -- 0
```

Pastikan database `sisabaik_dev` dapat diakses dan tabel dari Chapter 6 tersedia.

Jangan menjalankan ulang file schema yang menghapus tabel atau data tanpa memastikan tindakan tersebut memang diperlukan.

## 4. Menjalankan Server

Jalankan server pengembangan menggunakan:

```bash
npm run dev
```

Biarkan terminal tetap berjalan selama API digunakan. Server berjalan secara lokal sesuai konfigurasi proyek.

## 5. Pengujian API

Untuk menjalankan pengujian API, buka terminal kedua pada root folder proyek dan jalankan:

```bash
npm run api:test -- http://127.0.0.1:3000
```

Pastikan server sudah berjalan sebelum pengujian dimulai.

Untuk menguji konkurensi pembelian ketika stok hanya tersisa satu, jalankan:

```bash
node scripts/uji-konkurensi.js
```

Pengujian konkurensi diharapkan menghasilkan satu permintaan berhasil dengan status HTTP `201` dan satu permintaan ditolak dengan status HTTP `409`. Stok akhir harus bernilai `0`.

Pengujian ini hanya dilakukan pada server lokal untuk keperluan latihan.

## 6. Format Request Pesanan

Request pembuatan pesanan menggunakan field `emailPembeli` untuk mengidentifikasi pembeli.

Contoh struktur request:

```json
{
  "emailPembeli": "siti.pembeli@example.test",
  "items": [
    {
      "penawaranId": 1,
      "kuantitas": 1
    }
  ]
}
```

Sesuaikan ID penawaran dengan data yang tersedia pada database latihan.

## 7. Kebijakan ID

ID pada response API diperlakukan sebagai nilai yang dapat dikirim dalam bentuk string oleh client. Client perlu mempertahankan ID sebagaimana diterima dari API dan tidak mengasumsikan bahwa semua ID harus berupa angka JavaScript.

## 8. Struktur Proyek

```text
sisabaik-api/
├── database/
├── public/
├── scripts/
│   ├── check-db.js
│   ├── create-order.js
│   ├── uji-api.js
│   └── uji-konkurensi.js
├── src/
│   ├── controllers/
│   ├── db/
│   ├── lib/
│   ├── middleware/
│   ├── repositories/
│   ├── routes/
│   └── services/
├── .env
├── .env.example
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 9. Batasan Aplikasi

Aplikasi ini masih digunakan secara lokal untuk keperluan pembelajaran. Autentikasi dan otorisasi pengguna belum diimplementasikan.

Jangan menggunakan aplikasi ini untuk menangani data atau transaksi nyata sebelum mekanisme keamanan yang diperlukan diterapkan.
