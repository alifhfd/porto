import { GlowCard } from '@/components/glow-card'

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Mari Terhubung</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Terbuka untuk peluang kerja, kolaborasi data analytics, dan diskusi optimasi proses bisnis.
          Jangan ragu untuk menghubungi saya!
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <GlowCard className="p-5">
            <p className="text-sm font-semibold text-muted-foreground">Email</p>
            <a
              href="mailto:haalief15@gmail.com"
              className="mt-2 block font-bold text-primary hover:underline break-all"
            >
              haalief15@gmail.com
            </a>
          </GlowCard>
          <GlowCard className="p-5">
            <p className="text-sm font-semibold text-muted-foreground">WhatsApp</p>
            <a
              href="https://wa.me/6285716523634"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-bold text-primary hover:underline"
            >
              +62 857-1652-3634
            </a>
          </GlowCard>
          <GlowCard className="p-5">
            <p className="text-sm font-semibold text-muted-foreground">Lokasi</p>
            <p className="mt-2 font-bold">Citeureup, Kab. Bogor</p>
            <p className="text-xs text-muted-foreground mt-1">Jawa Barat, Indonesia</p>
          </GlowCard>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/6285716523634"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            💬 Hubungi via WhatsApp
          </a>
          <a
            href="mailto:haalief15@gmail.com"
            className="inline-flex rounded-xl border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            ✉️ Kirim Email
          </a>
        </div>
      </div>
    </section>
  )
}
