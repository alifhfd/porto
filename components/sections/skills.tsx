const GROUPS = [
  {
    category: 'Analytics & BI',
    items: [
      { name: 'Power BI',          level: 85 },
      { name: 'SQL',               level: 80 },
      { name: 'Python',            level: 70 },
      { name: 'Excel / Spreadsheet', level: 90 },
    ],
  },
  {
    category: 'ERP & Operations',
    items: [
      { name: 'SAP ERP',                level: 80 },
      { name: 'Inventory Reconciliation', level: 85 },
      { name: 'Bill of Materials',       level: 75 },
      { name: 'Production Monitoring',   level: 80 },
    ],
  },
  {
    category: 'Quality & Standards',
    items: [
      { name: 'ISO 9001:2015',        level: 85 },
      { name: 'CPOB / GMP',           level: 75 },
      { name: 'Batch Record Mgmt',    level: 80 },
      { name: 'Data Reporting',       level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Skills</p>
        <h2 className="text-4xl font-black tracking-tight text-foreground mb-12">Keahlian</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {GROUPS.map(g => (
            <div key={g.category} className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/70">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">{g.category}</p>
              <div className="space-y-5">
                {g.items.map(s => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-0.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
