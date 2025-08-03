# Simple E-commerce

Proyek aplikasi web e-commerce full-stack yang dibangun menggunakan tumpukan teknologi modern. Aplikasi ini mengimplementasikan alur esensial, mulai dari antarmuka pelanggan hingga dasbor manajemen untuk admin.

## ✨ Fitur Utama

### 🛍️ Sisi Pelanggan

- Halaman utama dinamis yang menampilkan produk unggulan.
- Katalog produk dengan pencarian _real-time_ dan filter multi-parameter.
- Halaman detail untuk setiap produk.
- Manajemen keranjang belanja dengan persistensi sesi.
- Sistem otentikasi (registrasi & login) untuk pelanggan.
- Alur checkout yang terintegrasi dengan payment gateway Xendit.

### 🔐 Sisi Admin

- Dasbor admin dengan rute yang terproteksi berbasis peran (role-based).
- Fungsionalitas CRUD (Create, Read, Update, Delete) untuk entitas utama: Produk, Kategori, Brand, dan Lokasi.
- Manajemen gambar yang terintegrasi dengan Supabase Storage.
- Tampilan data untuk Pesanan (Orders) dan Pelanggan (Customers).
- Tabel data interaktif dengan fitur pagination dan kustomisasi kolom.

## 🚀 Teknologi Yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database & Storage:** [Supabase](https://supabase.com/) (PostgreSQL & File Storage)
- **Otentikasi:** [Lucia Auth](https://lucia-auth.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Payment Gateway:** [Xendit](https://www.xendit.co/id/)
- **Validasi:** [Zod](https://zod.dev/)

## 🛠️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

1.  **Clone Repositori**

    ```bash
    git clone [https://github.com/username/nama-repo.git](https://github.com/username/nama-repo.git)
    cd nama-repo
    ```

2.  **Setup Environment Variables**
    Salin file `.env.example` menjadi `.env.local` dan isi semua variabel yang dibutuhkan.

    ```bash
    cp .env.example .env.local
    ```

3.  **Install Dependencies**
    Proyek ini menggunakan `bun` sebagai package manager.

    ```bash
    bun install
    ```

    Atau jika kamu menggunakan `npm`:

    ```bash
    npm install
    ```

4.  **Jalankan Migrasi Database**
    Perintah ini akan menyinkronkan skema Prisma dengan database Supabase-mu.

    ```bash
    npx prisma migrate dev
    ```

5.  **(Opsional) Isi Database dengan Data Awal (Seed)**
    Untuk mengisi database dengan data dummy, jalankan:

    ```bash
    npx prisma db seed
    ```

6.  **Jalankan Development Server**

    ```bash
    bun run dev
    ```

    Atau jika kamu menggunakan `npm`:

    ```bash
    npm run dev
    ```

    Buka [http://localhost:3000](http://localhost:3000) di browser-mu.
