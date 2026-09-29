// Setiap object di array ini otomatis menjadi satu card di section "Repair Cases"
// dan satu halaman detail di /repair/:slug — tanpa perlu mengubah komponen UI.
//
// Field yang belum ada datanya diisi string kosong '' atau array kosong []
// dan akan otomatis ditampilkan sebagai placeholder oleh komponennya.
// JANGAN mengisi field diagnosis/result dengan data yang belum benar-benar diverifikasi.

export const repairCases = [
  {
    slug: 'asus-tuf-gaming-hinge-damage',
    title: 'Asus Tuf gaming — Laptop Hinge Damage',
    device: 'Asus Tuf gaming',
    problem:
      'Laptop mengalami masalah setelah engsel keras dan menghancurkan place holder baut.',
    initialInspection: '',
    diagnosis: '',
    repairProcess: '',
    result: '',
    status: 'resolved', // 'in-progress' | 'resolved' | 'unresolved'
    photos: {
      before: ["/images/engselTuf.jpeg"], // tambahkan path/URL screenshot di sini
      motherboard: ["/images/moboTuf.jpeg"], // tambahkan path/URL screenshot di sini
      measurement: [],
      after: ["/images/engselAfter.jpeg"], // tambahkan path/URL screenshot di sini
    },
  },
  // Tambahkan case baru di sini, contoh:
  // {
  //   slug: 'nama-device-masalah-singkat',
  //   title: 'Judul Case',
  //   device: 'Nama perangkat',
  //   problem: 'Deskripsi masalah',
  //   initialInspection: '',
  //   diagnosis: '',
  //   repairProcess: '',
  //   result: '',
  //   status: 'in-progress',
  //   photos: { before: [], motherboard: [], measurement: [], after: [] },
  // },
]
