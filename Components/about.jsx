export default function About() {
  const highlights = [
    { label: "Berdiri sejak", value: "1998" },
    { label: "Akreditasi", value: "A" },
    { label: "Guru & staf", value: "85+" },
    { label: "Program studi", value: "3 Jurusan" },
  ];

  return (
    <section
      id="profil"
      className="bg-[#0B1D3A] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Kolom kiri: teks */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#F5A623]" />
            <p className="text-sm tracking-wide text-[#F5A623]">
              Profil Sekolah
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight mb-6">
            Membentuk generasi unggul yang siap menghadapi masa depan.
          </h1>

          <div className="space-y-4 mb-10 text-white/70 leading-relaxed">
            <p>
              SMA Negeri Harapan Bangsa berdiri sejak 1998 sebagai lembaga
              pendidikan menengah yang berkomitmen mencetak lulusan
              berprestasi, berkarakter, dan siap bersaing baik di tingkat
              nasional maupun internasional.
            </p>
            <p>
              Dengan dukungan tenaga pendidik berpengalaman dan fasilitas
              belajar yang lengkap, kami mendorong setiap siswa untuk
              mengembangkan potensi akademik, minat, dan bakatnya secara
              maksimal.
            </p>
          </div>

          <a
            href="#profil"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-[#0B1D3A] font-medium text-sm px-5 py-3 rounded-full hover:bg-[#e6981a] transition-colors"
          >
            Selengkapnya tentang kami
          </a>
        </div>

        {/* Kolom kanan: kartu statistik */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-3xl font-semibold text-[#F5A623] mb-1">
                {item.value}
              </p>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}