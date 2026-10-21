import { MessageSquare } from "lucide-react"

export default function ConsultoriaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center gap-2 text-bloom-700">
        <MessageSquare className="h-6 w-6" />
        <h1 className="text-2xl font-semibold text-zinc-900">Consultoria</h1>
      </div>
      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="font-medium">Orientação especializada em breve</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Estamos preparando esta área para ajudar você a cuidar melhor dos seus cultivos.
        </p>
      </section>
    </div>
  )
}
