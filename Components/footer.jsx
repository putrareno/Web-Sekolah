export default function Footer() {
  return (
    <footer className="bg-[#0f2a43] text-[#f4f1ea]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Tentang */}
          <div>
            <h3 className="font-serif text-xl font-semibold">
              SMA Negeri Harapan Bangsa
            </h3>
            <p className="mt-3 text-sm text-[#b9c4d0]">
              Mencetak generasi yang cerdas, berkarakter, dan siap menghadapi
              masa depan.
            </p>
          </div>

          {/* Menu cepat */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#e8a33d]">
              Menu
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[#b9c4d0]">
              <li>
                <a href="#beranda" className="hover:text-[#f4f1ea]">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-[#f4f1ea]">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="#akademik" className="hover:text-[#f4f1ea]">
                  Akademik
                </a>
              </li>
              <li>
                <a href="#berita" className="hover:text-[#f4f1ea]">
                  Berita
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#e8a33d]">
              Kontak
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[#b9c4d0]">
              <li>Jl. Pendidikan No. 123, Jakarta</li>
              <li>(021) 1234-5678</li>
              <li>info@smaharapanbangsa.sch.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-[#b9c4d0]">
          &copy; {new Date().getFullYear()} SMA Negeri Harapan Bangsa. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
