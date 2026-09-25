const BG = "#112445";
const GOLD = "#F5A623";

export default function Ekstrakurikuler() {
  const kegiatan = [
    { nama: "Basket", kategori: "Olahraga", jadwal: "Selasa & Kamis" },
    { nama: "Futsal", kategori: "Olahraga", jadwal: "Senin & Rabu" },
    { nama: "Paduan Suara", kategori: "Seni", jadwal: "Jumat" },
    { nama: "Tari Tradisional", kategori: "Seni", jadwal: "Sabtu" },
    { nama: "Pramuka", kategori: "Kepanduan", jadwal: "Sabtu" },
    { nama: "Karya Ilmiah Remaja", kategori: "Akademik", jadwal: "Rabu" },
    { nama: "English Club", kategori: "Akademik", jadwal: "Kamis" },
    { nama: "Palang Merah Remaja", kategori: "Sosial", jadwal: "Jumat" },
    { nama: "Jurnalistik", kategori: "Seni", jadwal: "Selasa" },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{ backgroundColor: BG }}
    >
      {/* Pola titik background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.05,
        }}
      />
      {/* Aksen blur emas */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-8rem",
          right: "-6rem",
          width: 420,
          height: 420,
          backgroundColor: GOLD,
          opacity: 0.12,
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
          <p
            className="text-sm tracking-wide font-medium"
            style={{ color: GOLD }}
          >
            Ekstrakurikuler
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight mb-6 max-w-2xl text-white">
          Mengasah minat dan bakat di luar jam pelajaran.
        </h1>

        <p className="leading-relaxed max-w-2xl mb-16 text-white/70">
          Sekolah menyediakan beragam kegiatan ekstrakurikuler untuk
          mendukung pengembangan siswa di bidang olahraga, seni, akademik,
          hingga kepanduan.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {kegiatan.map((item) => (
            <div
              key={item.nama}
              className="rounded-2xl p-6 transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)";
              }}
            >
              <span
                className="inline-block text-xs font-medium rounded-full px-3 py-1 mb-4"
                style={{ color: GOLD, backgroundColor: "rgba(245,166,35,0.12)" }}
              >
                {item.kategori}
              </span>
              <p className="text-lg font-medium mb-1 text-white">
                {item.nama}
              </p>
              <p className="text-sm text-white/60">Latihan: {item.jadwal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}