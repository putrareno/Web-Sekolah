export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#122A1E] text-[#F6F1E4]">
      {/* tekstur titik halus, kesan kertas ijazah */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#F6F1E4 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
        {/* Kolom kiri: teks */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-[#D9A441]/40 px-4 py-1.5 text-sm text-[#D9A441]">
            Terakreditasi A
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Tempat rasa ingin tahu tumbuh menjadi kesiapan menghadapi dunia.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#F6F1E4]/75">
            SMA Cendekia Bangsa membimbing setiap siswa untuk berpikir kritis,
            berkarya dengan percaya diri, dan siap melangkah ke jenjang
            pendidikan maupun karier pilihannya.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pendaftaran"
              className="inline-flex items-center justify-center rounded-md bg-[#D9A441] px-7 py-3.5 font-medium text-[#122A1E] transition hover:bg-[#e3b563] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441] focus-visible:ring-offset-2 focus-visible:ring-offset-[#122A1E]"
            >
              Daftar sebagai siswa baru
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-md border border-[#F6F1E4]/25 px-7 py-3.5 font-medium text-[#F6F1E4] transition hover:border-[#F6F1E4]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F1E4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#122A1E]"
            >
              Lihat program akademik
            </a>
          </div>

          {/* Statistik */}
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[#F6F1E4]/10 pt-8">
            <div>
              <dt className="text-xs text-[#F6F1E4]/55">Berdiri sejak</dt>
              <dd className="mt-1 font-serif text-2xl">1998</dd>
            </div>
            <div>
              <dt className="text-xs text-[#F6F1E4]/55">Siswa aktif</dt>
              <dd className="mt-1 font-serif text-2xl">1.200+</dd>
            </div>
            <div>
              <dt className="text-xs text-[#F6F1E4]/55">Lulus ke PTN</dt>
              <dd className="mt-1 font-serif text-2xl">98%</dd>
            </div>
          </dl>
        </div>

        {/* Kolom kanan: lambang visual sederhana */}
        <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full border border-[#D9A441]/25" />
          <div className="absolute inset-6 rounded-full border border-[#D9A441]/15" />
          <div className="absolute inset-14 flex items-center justify-center rounded-full bg-[#0E2117]">
            <span className="font-serif text-7xl text-[#D9A441]">CB</span>
          </div>

          {/* kartu prestasi mengambang */}
          <div className="absolute -bottom-4 left-1/2 w-64 -translate-x-1/2 rounded-lg bg-[#F6F1E4] px-5 py-4 text-[#122A1E] shadow-xl sm:left-auto sm:right-0 sm:translate-x-0">
            <p className="text-sm font-medium">Juara 1 Olimpiade Sains Nasional</p>
            <p className="mt-0.5 text-xs text-[#122A1E]/60">Tim Kimia · 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}