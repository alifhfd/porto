import { GlowCard } from '@/components/glow-card'

const skillGroups = [
  {
    category: 'Analytics & BI',
    items: [
      { name: 'Power BI', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Excel / Spreadsheet', level: 90 },
    ],
  },
  {
    category: 'ERP & Operations',
    items: [
      { name: 'SAP ERP', level: 80 },
      { name: 'Inventory Reconciliation', level: 85 },
      { name: 'Bill of Materials (BOM)', level: 75 },
      { name: 'Production Monitoring', level: 80 },
    ],
  },
  {
    category: 'Quality & Standards',
    items: [
      { name: 'ISO 9001:2015', level: 85 },
      { name: 'CPOB (GMP)', level: 75 },
      { name: 'Batch Record Management', level: 80 },
      { name: 'Data Reporting', level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Skills</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Keahlian</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Kombinasi kemampuan analitik dan operasional yang saling mendukung untuk menghasilkan insight bisnis yang actionable.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <GlowCard key={group.category} className="p-6">
              <h3 className="font-bold text-primary mb-5">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
