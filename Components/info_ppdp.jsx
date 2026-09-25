const NAVY = "#112445";
const GOLD = "#F5A623";

export default function InfoPPDB() {
  const jadwal = [
    { tahap: "Pendaftaran Gelombang 1", waktu: "1 – 28 Februari 2027" },
    { tahap: "Seleksi & Pengumuman", waktu: "3 – 7 Maret 2027" },
    { tahap: "Daftar Ulang", waktu: "10 – 14 Maret 2027" },
    { tahap: "Pendaftaran Gelombang 2", waktu: "1 – 30 April 2027" },
  ];

  const syarat = [
    "Fotokopi akta kelahiran",
    "Fotokopi kartu keluarga",
    "Fotokopi rapor terakhir",
    "Pas foto berwarna 3x4 (2 lembar)",
    "Surat keterangan lulus / ijazah",
  ];

  const jalur = [
    {
      nama: "Jalur Prestasi",
      ket: "Untuk siswa dengan nilai akademik atau prestasi non-akademik unggul.",
    },
    {
      nama: "Jalur Zonasi",
      ket: "Untuk siswa yang berdomisili dalam radius zona sekolah.",
    },
    {
      nama: "Jalur Reguler",
      ket: "Pendaftaran umum melalui seleksi administrasi dan tes.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{ backgroundColor: NAVY }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-6rem",
          left: "-8rem",
          width: 420,
          height: 420,
          backgroundColor: GOLD,
          opacity: 0.1,
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
          <p
            className="text-sm tracking-wide font-medium"
            style={{ color: GOLD }}
          >
            Penerimaan Peserta Didik Baru
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight mb-6 max-w-2xl text-white">
          Bergabunglah bersama SMA Negeri Harapan Bangsa.
        </h1>

        <p className="leading-relaxed max-w-2xl mb-16 text-white/70">
          Pendaftaran siswa baru tahun ajaran 2027/2028 sudah dibuka. Siapkan
          dokumen persyaratan dan pilih jalur pendaftaran yang sesuai dengan
          kondisi Anda.
        </p>

        {/* Jalur pendaftaran */}
        <p className="text-sm font-medium mb-4" style={{ color: GOLD }}>
          Jalur Pendaftaran
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {jalur.map((item) => (
            <div
              key={item.nama}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="font-medium mb-2 text-white">{item.nama}</p>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.ket}
              </p>
            </div>
          ))}
        </div>

        {/* Jadwal & syarat */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="text-sm font-medium mb-4" style={{ color: GOLD }}>
              Jadwal Penting
            </p>
            <ul className="space-y-3">
              {jadwal.map((item) => (
                <li
                  key={item.tahap}
                  className="flex justify-between gap-4 text-sm border-b pb-3"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <span className="text-white">{item.tahap}</span>
                  <span className="text-white/60 whitespace-nowrap">
                    {item.waktu}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-4" style={{ color: GOLD }}>
              Berkas Persyaratan
            </p>
            <ul className="space-y-2">
              {syarat.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-white/70"
                >
                  <span style={{ color: GOLD }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#daftar"
          className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-full transition-colors"
          style={{ backgroundColor: GOLD, color: NAVY }}
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
}