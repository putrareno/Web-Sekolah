import { useState, useEffect } from "react";

// Ganti data di bawah ini sesuai kebutuhan sekolahmu
const NAV_LINKS = [
    { label: "Beranda", href: "#beranda" },
    { label: "Profil Sekolah", href: "#profil" },
    { label: "Akademik", href: "#akademik" },
    { label: "Ekstrakurikuler", href: "#ekstrakurikuler" },
    { label: "Berita", href: "#berita" },
    { label: "Kontak", href: "#kontak" },
];

export default function Navbar({
    schoolName = "SMA Negeri Harapan Bangsa",
    logoSrc = null, // isi dengan path/URL logo sekolah kalau ada, mis: "/logo-sekolah.png"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Efek bayangan navbar saat halaman di-scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Kunci scroll body saat menu mobile terbuka
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-[#0c2338] shadow-lg shadow-black/20" : "bg-[#0f2a43]"
                }`}
        >
            <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-6 px-6">
                {/* Logo & Nama Sekolah */}
                <a
                    href="#beranda"
                    onClick={closeMenu}
                    className="mr-auto flex min-w-0 items-center gap-3 text-[#f4f1ea] no-underline"
                >
                    {logoSrc ? (
                        <img
                            src={logoSrc}
                            alt={`Logo ${schoolName}`}
                            className="h-10 w-10 flex-shrink-0 rounded-lg object-contain"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#e8a33d] text-sm font-bold tracking-wide text-[#0f2a43]"
                        >
                            {schoolName
                                .split(" ")
                                .slice(0, 2)
                                .map((word) => word[0])
                                .join("")}
                        </span>
                    )}
                    <span className="truncate font-serif text-lg font-semibold">{schoolName}</span>
                </a>

                {/* Menu Navigasi Desktop */}
                <nav aria-label="Menu utama" className="hidden gap-7 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium text-[#b9c4d0] no-underline transition-colors hover:border-[#e8a33d] hover:text-[#f4f1ea]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#ppdb"
                    className="hidden flex-shrink-0 rounded-full bg-[#e8a33d] px-[18px] py-[10px] text-sm font-semibold text-[#0f2a43] no-underline transition hover:brightness-110 md:inline-block"
                >
                    Info PPDB
                </a>

                {/* Tombol Hamburger (Mobile) */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                    aria-expanded={isOpen}
                    className="flex h-9 w-9 flex-shrink-0 flex-col justify-center gap-[5px] md:hidden"
                >
                    <span
                        className={`block h-0.5 w-full rounded-full bg-[#f4f1ea] transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full rounded-full bg-[#f4f1ea] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full rounded-full bg-[#f4f1ea] transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Menu Navigasi Mobile */}
            <nav
                aria-label="Menu mobile"
                className={`flex flex-col overflow-hidden bg-[#0c2338] transition-[max-height] duration-300 md:hidden ${isOpen ? "max-h-[480px]" : "max-h-0"
                    }`}
            >
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="border-t border-white/10 px-6 py-3.5 text-base text-[#f4f1ea] no-underline"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#ppdb"
                    onClick={closeMenu}
                    className="mx-6 mb-5 mt-4 rounded-full bg-[#e8a33d] py-3 text-center font-semibold text-[#0f2a43] no-underline"
                >
                    Info PPDB
                </a>
            </nav>
        </header>
    );
}