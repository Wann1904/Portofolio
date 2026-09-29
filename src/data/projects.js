export const projects = [
  {
    slug: 'repairnote',
    name: 'RepairNote',
    description:
      'Aplikasi pencatatan servis perangkat yang dibuat menggunakan Flutter dan SQLite.',
    stack: ['Flutter', 'Dart', 'SQLite'],
    features: [
      'Customer information',
      'Device information',
      'Service status',
      'Service cost',
      'Service history',
    ],
    overview:
      'RepairNote dibuat untuk membantu mencatat proses servis perangkat secara terstruktur, mulai dari data pelanggan hingga riwayat servis.',
    problem: 'Pencatatan servis perangkat secara manual dapat menyulitkan teknisi dalam mengelola informasi pelanggan, data perangkat, biaya servis, dan riwayat perbaikan. Data yang tidak tersusun dengan baik juga dapat membuat proses pencarian informasi menjadi kurang efisien.',
    approach: 'Saya mengembangkan aplikasi RepairNote sebagai solusi pencatatan servis perangkat berbasis digital. Aplikasi ini dirancang dengan antarmuka yang sederhana agar teknisi dapat mencatat informasi pelanggan, perangkat, keluhan, biaya, dan status servis dalam satu aplikasi.',
    implementation: 'RepairNote dikembangkan menggunakan Flutter dan bahasa pemrograman Dart untuk membangun antarmuka aplikasi. SQLite digunakan sebagai database lokal untuk menyimpan data pelanggan, informasi perangkat, status servis, biaya, dan riwayat servis secara terstruktur.',
    result: 'RepairNote menghasilkan aplikasi pencatatan servis perangkat yang dapat membantu teknisi mengelola data servis secara lebih terorganisir. Aplikasi ini menyediakan fitur pencatatan informasi pelanggan dan perangkat, pemantauan status servis, serta penyimpanan riwayat servis menggunakan database lokal.',
    github: 'https://github.com/Wann1904/Service_note', // isi dengan URL repo GitHub jika sudah tersedia
    demo: 'https://github.com/Wann1904/Service_note/releases/tag/ServiceNote',
    gallery: ["/images/ServiceNote1.jpeg","/images/ServiceNote2.jpeg"], // tambahkan path/URL screenshot di sini
  },
  // Tambahkan project baru di sini, contoh:
   {
     slug: 'DcMusicBot',
     name: 'Discord Music Bot',
     description: 'Deskripsi singkat.',
     stack: ['Tech A', 'Tech B'],
     features: [],
     overview: '',
     problem: '',
     approach: '',
     implementation: '',
     result: '',
     github: '',
     demo: '',
     gallery: [],
   },
]
