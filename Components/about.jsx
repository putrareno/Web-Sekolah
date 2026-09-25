export default function About() {
  const links = [
    { label: "Email", href: "mailto:nama@email.com" },
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
  ];

  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900 flex items-center justify-center px-6">
      <div className="max-w-xl w-full py-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-neutral-900 shrink-0" />
          <p className="text-sm text-neutral-500">Tentang saya</p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-medium leading-snug tracking-tight mb-6 text-neutral-900">
          Saya membangun produk digital dengan perhatian pada detail dan
          kesederhanaan.
        </h1>

        <div className="space-y-4 mb-10">
          <p className="text-neutral-600 leading-relaxed">
            Nama saya [Nama Anda], seorang [profesi/peran] yang fokus pada
            [bidang keahlian, mis. pengembangan web, desain produk, atau data].
            Saya percaya solusi terbaik biasanya yang paling sederhana.
          </p>

          <p className="text-neutral-600 leading-relaxed">
            Saat ini saya sedang mengerjakan [proyek/hal yang sedang
            dikerjakan]. Di luar itu, saya senang [hobi atau minat singkat].
          </p>
        </div>

        <div className="h-px bg-neutral-200 mb-8" />

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group inline-flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              {link.label}
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
