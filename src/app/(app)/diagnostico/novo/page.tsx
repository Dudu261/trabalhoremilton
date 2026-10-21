import Link from "next/link"
import { ScanSearch } from "lucide-react"

export default function NovoDiagnosticoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-bloom-700">
          <ScanSearch className="h-6 w-6" />
          <h1 className="text-2xl font-semibold text-zinc-900">Novo diagnóstico</h1>
        </div>
        <p className="text-zinc-600">
          A análise inteligente das condições do seu cultivo estará disponível em breve.
        </p>
      </header>
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <p className="text-sm text-zinc-600">
          Cadastre um cultivo para acompanhar as condições da estação e preparar um diagnóstico.
        </p>
        <Link
          href="/cultivos"
          className="mt-4 inline-flex rounded-lg bg-bloom-600 px-4 py-2 text-sm font-medium text-white hover:bg-bloom-700"
        >
          Ver meus cultivos
        </Link>
      </section>
    </div>
  )
}
