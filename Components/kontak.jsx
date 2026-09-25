import { useState } from "react";

// Ganti data kontak di bawah ini sesuai sekolahmu
const CONTACT_INFO = [
    {
        label: "Alamat",
        value: "Jl. Pendidikan No. 45, Tangerang Selatan, Banten 15417",
    },
    {
        label: "Telepon",
        value: "(021) 7654-321",
    },
    {
        label: "Email",
        value: "info@smacendekiabangsa.sch.id",
    },
    {
        label: "Jam Operasional",
        value: "Senin – Jumat, 07.00 – 15.00 WIB",
    },
];

const SOCIALS = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "WhatsApp", href: "https://wa.me/6281234567890" },
];

export default function KontakSection() {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        pesan: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Hapus pesan error saat user mulai mengetik ulang
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
        if (!formData.email.trim()) {
            newErrors.email = "Email wajib diisi";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Format email tidak valid";
        }
        if (!formData.pesan.trim()) newErrors.pesan = "Pesan wajib diisi";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus("loading");

        // TODO: ganti simulasi ini dengan panggilan API asli,
        // misalnya ke EmailJS, Formspree, atau backend kamu sendiri.
        setTimeout(() => {
            setStatus("success");
            setFormData({ nama: "", email: "", pesan: "" });

            // Kembalikan tombol ke keadaan semula setelah beberapa detik
            setTimeout(() => setStatus("idle"), 4000);
        }, 1200);
    };

    return (
        <section
            id="kontak"
            className="relative scroll-mt-[72px] overflow-hidden bg-[#112445] text-[#F6F1E4]"
        >
            {/* tekstur titik halus, konsisten dengan Hero */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(#F6F1E4 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-28">
                {/* Judul Section */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full border border-[#D9A441]/40 px-4 py-1.5 text-sm text-[#D9A441]">
                        Hubungi Kami
                    </span>
                    <h2 className="mt-6 font-serif text-3xl leading-[1.2] tracking-tight sm:text-4xl">
                        Ada pertanyaan? Kami siap membantu.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-[#F6F1E4]/75">
                        Tim kami akan merespons pesan kamu secepatnya di jam kerja.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                    {/* Kolom kiri: Info Kontak */}
                    <div className="lg:col-span-2">
                        <dl className="space-y-8">
                            {CONTACT_INFO.map((item) => (
                                <div
                                    key={item.label}
                                    className="border-l-2 border-[#D9A441]/40 pl-5"
                                >
                                    <dt className="text-xs uppercase tracking-wide text-[#D9A441]">
                                        {item.label}
                                    </dt>
                                    <dd className="mt-1.5 text-[#F6F1E4]/85">{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Tautan Sosial Media */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md border border-[#F6F1E4]/25 px-4 py-2 text-sm text-[#F6F1E4]/85 transition hover:border-[#D9A441]/60 hover:text-[#D9A441]"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Kolom kanan: Form Kontak */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="rounded-xl border border-[#F6F1E4]/10 bg-[#0c1d3b] p-6 sm:p-8"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* Nama */}
                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="nama"
                                        className="mb-1.5 block text-sm text-[#F6F1E4]/70"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="nama"
                                        name="nama"
                                        type="text"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        placeholder="Nama kamu"
                                        className={`w-full rounded-md border bg-transparent px-4 py-2.5 text-[#F6F1E4] placeholder:text-[#F6F1E4]/35 outline-none transition focus:ring-2 focus:ring-[#D9A441]/50 ${errors.nama ? "border-red-400/70" : "border-[#F6F1E4]/20"
                                            }`}
                                    />
                                    {errors.nama && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.nama}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-sm text-[#F6F1E4]/70"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="nama@email.com"
                                        className={`w-full rounded-md border bg-transparent px-4 py-2.5 text-[#F6F1E4] placeholder:text-[#F6F1E4]/35 outline-none transition focus:ring-2 focus:ring-[#D9A441]/50 ${errors.email ? "border-red-400/70" : "border-[#F6F1E4]/20"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Pesan */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="pesan"
                                        className="mb-1.5 block text-sm text-[#F6F1E4]/70"
                                    >
                                        Pesan
                                    </label>
                                    <textarea
                                        id="pesan"
                                        name="pesan"
                                        rows={5}
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        placeholder="Tulis pertanyaan atau pesan kamu di sini..."
                                        className={`w-full resize-none rounded-md border bg-transparent px-4 py-2.5 text-[#F6F1E4] placeholder:text-[#F6F1E4]/35 outline-none transition focus:ring-2 focus:ring-[#D9A441]/50 ${errors.pesan ? "border-red-400/70" : "border-[#F6F1E4]/20"
                                            }`}
                                    />
                                    {errors.pesan && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.pesan}</p>
                                    )}
                                </div>
                            </div>

                            {/* Tombol Kirim */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#D9A441] px-7 py-3.5 font-medium text-[#112445] transition hover:bg-[#e3b563] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                            >
                                {status === "loading" && (
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#112445]/30 border-t-[#112445]" />
                                )}
                                {status === "loading"
                                    ? "Mengirim..."
                                    : status === "success"
                                        ? "Terkirim ✓"
                                        : "Kirim Pesan"}
                            </button>

                            {/* Notifikasi Sukses */}
                            {status === "success" && (
                                <p className="mt-4 text-sm text-[#D9A441]">
                                    Terima kasih! Pesan kamu sudah kami terima dan akan segera
                                    direspons.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}