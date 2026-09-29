import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading id="about-heading" title="About Me" accent="neutral" />

      <div className="max-w-prose space-y-5 leading-relaxed text-ink-soft">
        <p>
          Saya mahasiswa Sistem Informasi yang tertarik pada sisi praktis dari teknologi, tentang
          bagaimana sebuah sistem, baik software maupun hardware, benar-benar bekerja saat
          dibongkar sampai ke akarnya. Ketertarikan ini bermula dari kebiasaan membongkar dan
          memperbaiki laptop atau gadget, lalu berkembang menjadi rasa ingin tahu terhadap
          bagaimana motherboard, power sequence, voltage rail, dan charging circuit saling
          berhubungan.
        </p>
        <p>
          Di sisi lain, saya juga mengembangkan aplikasi menggunakan Flutter dan terbiasa bekerja
          di lingkungan Linux sehari-hari. Bagi saya, software dan hardware bukan dua dunia yang
          terpisah berusaha memahami keduanya membuat proses troubleshooting jadi lebih menyeluruh,
          baik saat mendiagnosis kerusakan fisik maupun saat men-debug aplikasi.
        </p>
        <p>
          Cara saya belajar sebagian besar melalui eksperimen langsung dan mendokumentasikan
          kasus nyata dari apa yang saya temukan, apa yang saya coba, dan apa hasilnya. Website ini
          adalah kumpulan dari dokumentasi tersebut, bukan daftar klaim.
        </p>
      </div>
    </section>
  )
}
