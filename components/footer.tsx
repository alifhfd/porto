export function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} <span className="font-bold text-foreground">Alief Hafid Sidiq</span></p>
        <p>Data Analysis & Visualization | Business Management | Project Development | Supply Chain Management </p>
      </div>
    </footer>
  )
}
