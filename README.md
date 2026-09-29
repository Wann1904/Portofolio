# Ridwan Maulana Pratama — Portfolio

Portfolio pribadi dibangun dengan React + Tailwind CSS + Vite. Menggabungkan dua fokus:
software development dan laptop/gadget repair, dengan dokumentasi project dan repair case
yang bisa terus bertambah tanpa mengubah struktur UI.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk production

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`. Karena situs ini menggunakan client-side routing
(halaman detail di `/repair/:slug` dan `/projects/:slug`), saat deploy ke hosting statis
(Netlify, Vercel, GitHub Pages, dsb.) pastikan server di-set untuk fallback semua route
ke `index.html` (SPA fallback / rewrite rule).

## Menambahkan konten baru

Semua konten yang bisa berkembang disimpan sebagai data, bukan ditulis langsung di
komponen UI:

- `src/data/site.js` — nama, tagline, kontak (email, GitHub, LinkedIn).
- `src/data/skills.js` — daftar skill hardware & software.
- `src/data/repairCases.js` — tambahkan object baru di array ini untuk menambah repair
  case baru. Card dan halaman detail (`/repair/slug-nya`) akan otomatis dibuat.
- `src/data/projects.js` — tambahkan object baru di array ini untuk menambah project
  software baru. Card dan halaman detail (`/projects/slug-nya`) akan otomatis dibuat.
- `src/data/learning.js` — topik-topik di section Learning Journey.

Field yang masih kosong (`''` atau `[]`) akan otomatis ditampilkan sebagai placeholder
yang jelas di UI ("Belum diisi.", foto placeholder, dsb.) — bukan data karangan.

## Struktur

```
src/
  components/   # Section & elemen UI (Hero, About, Skills, Navbar, dst.)
  pages/        # Halaman yang di-routing (Home, detail repair case, detail project)
  data/         # Sumber data — edit di sini untuk menambah/mengubah konten
  App.jsx       # Definisi routing
  main.jsx      # Entry point
```

## Catatan tentang form Contact

Form di section Contact saat ini membuka email client (`mailto:`) dengan isi pesan
sudah terisi otomatis — tidak butuh backend. Jika ingin pengiriman langsung tanpa
membuka email client, hubungkan `handleSubmit` di `src/components/Contact.jsx` ke
layanan seperti Formspree, atau ke backend Anda sendiri.
# Portofolio
