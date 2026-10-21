import { CreditCard } from "lucide-react"

export default function PlanosPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center gap-2 text-bloom-700">
        <CreditCard className="h-6 w-6" />
        <h1 className="text-2xl font-semibold text-zinc-900">Planos</h1>
      </div>
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="font-medium">Planos BloomGuard em breve</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Em breve você poderá conhecer as opções de monitoramento disponíveis para seus cultivos.
        </p>
      </section>
    </div>
  )
}
