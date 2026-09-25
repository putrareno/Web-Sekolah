// Font disarankan (opsional, sama seperti hero.jsx): tambahkan di index.html
// <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
// lalu di tailwind.config.js:
// fontFamily: { serif: ['Fraunces', 'serif'], sans: ['Inter', 'sans-serif'] }

const jenjang = [
  {
    kelas: "Kelas 10",
    fokus: "Mata pelajaran umum",
    desc: "Semua siswa mengikuti mata pelajaran yang sama sebagai dasar sebelum memilih peminatan.",
    mapel: ["Matematika Umum", "Bahasa Indonesia", "Bahasa Inggris", "IPA Terpadu", "IPS Terpadu", "PPKn"],
    jam: "42 jam pelajaran / minggu",
  },
  {
    kelas: "Kelas 11",
    fokus: "Mulai peminatan",
    desc: "Siswa memilih salah satu dari 3 program peminatan dan mulai mendalami mata pelajaran pilihan.",
    mapel: ["Mata pelajaran wajib", "2 mata pelajaran peminatan", "1 mata pelajaran lintas minat"],
    jam: "44 jam pelajaran / minggu",
  },
  {
    kelas: "Kelas 12",
    fokus: "Pendalaman & persiapan lanjut studi",
    desc: "Porsi belajar difokuskan ke mata pelajaran peminatan serta persiapan ujian dan seleksi PTN.",
    mapel: ["Pendalaman peminatan", "Bimbingan studi lanjut", "Simulasi ujian berkala"],
    jam: "44 jam pelajaran / minggu",
  },
];

const programs = [
  {
    name: "IPA",
    full: "Ilmu Pengetahuan Alam",
    kelas: "6 rombel · 210 siswa",
    subjects: ["Matematika Peminatan", "Fisika", "Kimia", "Biologi"],
  },
  {
    name: "IPS",
    full: "Ilmu Pengetahuan Sosial",
    kelas: "5 rombel · 175 siswa",
    subjects: ["Ekonomi", "Sosiologi", "Geografi", "Sejarah Peminatan"],
  },
  {
    name: "Bahasa",
    full: "Bahasa dan Budaya",
    kelas: "2 rombel · 68 siswa",
    subjects: ["Bahasa Inggris Lanjut", "Sastra Indonesia", "Bahasa Asing", "Antropologi"],
  },
];

const penilaian = [
  { label: "Ulangan harian", desc: "Setiap akhir sub-bab, per mata pelajaran" },
  { label: "Penilaian tengah semester", desc: "Minggu ke-9, seluruh mata pelajaran" },
  { label: "Penilaian akhir semester", desc: "Minggu ke-18, seluruh mata pelajaran" },
  { label: "Portofolio & proyek", desc: "Dinilai berkala di setiap semester berjalan" },
];

const fasilitas = [
  { nama: "Laboratorium IPA", detail: "3 ruang: fisika, kimia, biologi, lengkap alat praktikum" },
  { nama: "Laboratorium komputer", detail: "2 ruang, 40 unit, akses internet untuk riset dan ujian berbasis komputer" },
  { nama: "Perpustakaan", detail: "12.000+ judul buku, area baca dan ruang diskusi kelompok" },
  { nama: "Ruang bimbingan konseling", detail: "Konsultasi akademik dan arah studi lanjut" },
];

const prestasi = [
  { tahun: "2026", judul: "Juara 1 Olimpiade Sains Nasional bidang Kimia" },
  { tahun: "2025", judul: "Juara 2 Kompetisi Debat Bahasa Inggris tingkat provinsi" },
  { tahun: "2025", judul: "98% lulusan diterima di PTN melalui jalur SNBP dan SNBT" },
  { tahun: "2024", judul: "Juara 1 Cerdas Cermat IPS tingkat kota" },
];

export default function AcademicPage() {
  return (
    <section className="relative overflow-hidden scroll-mt-[72px] bg-[#112445] text-[#F6F1E4]">
      {/* tekstur titik halus, sama seperti hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#F6F1E4 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-28">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#D9A441]/40 px-4 py-1.5 text-sm text-[#D9A441]">
            Program akademik
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl">
            Tiga tahun belajar, dirancang jelas dari kelas 10 sampai lulus.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#F6F1E4]/75">
            Berikut struktur lengkap program akademik SMA Negeri Harapan
            Bangsa: jenjang kelas, peminatan, sistem penilaian, fasilitas
            penunjang, dan pencapaian akademik terbaru.
          </p>
        </div>

        {/* Struktur per jenjang kelas */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl">Struktur belajar per tingkat</h2>
          <div className="mt-10 space-y-6">
            {jenjang.map((tingkat, i) => (
              <div
                key={tingkat.kelas}
                className="grid grid-cols-1 gap-4 border-t border-[#F6F1E4]/10 pt-6 sm:grid-cols-[140px_1fr_auto]"
              >
                <div>
                  <p className="font-serif text-xl text-[#D9A441]">{tingkat.kelas}</p>
                  <p className="mt-1 text-sm text-[#F6F1E4]/60">{tingkat.fokus}</p>
                </div>
                <div>
                  <p className="text-[#F6F1E4]/80">{tingkat.desc}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tingkat.mapel.map((mapel) => (
                      <li
                        key={mapel}
                        className="rounded border border-[#F6F1E4]/15 px-2.5 py-1 text-xs text-[#F6F1E4]/70"
                      >
                        {mapel}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-[#F6F1E4]/55 sm:text-right">
                  {tingkat.jam}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program peminatan */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl">Program peminatan kelas 11–12</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="rounded-lg border border-[#F6F1E4]/10 bg-[#16385F] p-7"
              >
                <p className="font-serif text-3xl text-[#D9A441]">{program.name}</p>
                <p className="mt-1 text-sm text-[#F6F1E4]/60">{program.full}</p>
                <p className="mt-4 text-sm text-[#F6F1E4]/55">{program.kelas}</p>

                <ul className="mt-6 space-y-2 border-t border-[#F6F1E4]/10 pt-5">
                  {program.subjects.map((subject) => (
                    <li key={subject} className="text-sm text-[#F6F1E4]/75">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sistem penilaian */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Sistem penilaian</h2>
            <div className="mt-8 space-y-5">
              {penilaian.map((item) => (
                <div key={item.label} className="border-l-2 border-[#D9A441]/50 pl-5">
                  <p className="font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-[#F6F1E4]/65">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fasilitas penunjang */}
          <div>
            <h2 className="font-serif text-3xl">Fasilitas penunjang</h2>
            <div className="mt-8 space-y-5">
              {fasilitas.map((item) => (
                <div key={item.nama} className="border-l-2 border-[#D9A441]/50 pl-5">
                  <p className="font-medium">{item.nama}</p>
                  <p className="mt-1 text-sm text-[#F6F1E4]/65">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prestasi akademik */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl">Pencapaian akademik terbaru</h2>
          <div className="mt-8 divide-y divide-[#F6F1E4]/10 border-t border-[#F6F1E4]/10">
            {prestasi.map((item) => (
              <div
                key={item.judul}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-serif text-lg text-[#D9A441] sm:w-16">
                  {item.tahun}
                </span>
                <span className="text-[#F6F1E4]/80">{item.judul}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistik guru & kelas */}
        <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-[#F6F1E4]/10 pt-10 sm:grid-cols-4">
          <div>
            <dt className="text-xs text-[#F6F1E4]/55">Guru tetap</dt>
            <dd className="mt-1 font-serif text-2xl">85</dd>
          </div>
          <div>
            <dt className="text-xs text-[#F6F1E4]/55">Guru bergelar S2</dt>
            <dd className="mt-1 font-serif text-2xl">40%</dd>
          </div>
          <div>
            <dt className="text-xs text-[#F6F1E4]/55">Rasio guru:siswa</dt>
            <dd className="mt-1 font-serif text-2xl">1:15</dd>
          </div>
          <div>
            <dt className="text-xs text-[#F6F1E4]/55">Mata pelajaran pilihan</dt>
            <dd className="mt-1 font-serif text-2xl">18</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}