const FOCUS = [
  'Data Analisis & Visualisasi',
  'ERP & Optimasi Proses Bisnis',
  'Manajemen Bisnis',
  'Manajemen Rantai Pasokan',
]

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Ringkasan</p>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-6">
              Tentang Alief Hafid Sidiq
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
              Saat ini sedang mengembangkan kompetensi di bidang Business Analytics dan Data Analysis melalui pemanfaatan 
              Python, SQL, Microsoft Excel, dan Power BI untuk mengolah data operasional menjadi insight yang mendukung 
              pengambilan keputusan bisnis. Memiliki ketertarikan yang tinggi terhadap continuous improvement, 
              operational excellence, serta penerapan analisis data untuk meningkatkan efisiensi proses, mendukung strategi bisnis, 
              dan mengoptimalkan kinerja operasional, khususnya pada sektor manufaktur dan supply chain.
            </p>

            {/* Focus areas */}
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {FOCUS.map(f => (
                <div key={f} className="border border-border rounded p-4">
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">Fokus</p>
                  <p className="text-sm font-bold text-foreground">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="border border-border rounded p-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">Profil Singkat</p>
            <dl className="space-y-4 text-sm">
              {[
                { label: 'Lokasi',    value: 'Citeureup, Kab. Bogor' },
                { label: 'Email',     value: 'haalief15@gmail.com'   },
                { label: 'WhatsApp',  value: '+62 857-1652-3634'     },
                { label: 'Instagram', value: '@alifhfd'    },
              ].map(item => (
                <div key={item.label}>
                  <dt className="font-bold text-foreground">{item.label}</dt>
                  <dd className="text-muted-foreground mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
