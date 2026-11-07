export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Contact</p>
        <h2 className="text-4xl font-black tracking-tight text-foreground mb-4">Mari Terhubung</h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Sangat terbuka untuk peluang kerja baru, dan berkolaborasi serta berkembang bersama.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          {[
            { label: 'Email',    value: 'haalief15@gmail.com', href: 'mailto:haalief15@gmail.com' },
            { label: 'Nomor Telepon', value: '+62 857-1652-3634',   href: 'https://wa.me/6285716523634' },
            { label: 'Alamat',   value: 'Citeureup, Kab. Bogor', href: undefined },
          ].map(c => (
            <div key={c.label} className="group rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/70">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">{c.label}</p>
              {c.href
                ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-all">{c.value}</a>
                : <p className="text-sm font-semibold text-foreground">{c.value}</p>
              }
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="https://wa.me/6285716523634" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-primary/90 transition-colors">
            💬 Hubungi via WhatsApp
          </a>
          <a href="mailto:haalief15@gmail.com"
            className="px-6 py-2.5 border border-border text-sm font-bold rounded text-foreground hover:border-foreground transition-colors">
            ✉️ Kirim Email
          </a>
        </div>
      </div>
    </section>
  )
}
