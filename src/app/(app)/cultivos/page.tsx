"use client"

import Link from "next/link"
import { Sprout } from "lucide-react"
import { EmptyState, Skeleton } from "@/app/components/ui/Estados"
import { useCultivos } from "@/app/lib/cultivos"

export default function PaginaCultivos() {
  const { cultivos, carregando } = useCultivos()

  if (carregando) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  if (cultivos.length > 0) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Meus cultivos</h1>
          <Link
            href="/cultivos/novo"
            className="inline-flex items-center gap-2 rounded-lg bg-bloom-600 px-4 py-2 text-sm font-medium text-white hover:bg-bloom-700"
          >
            <Sprout className="h-4 w-4" /> Novo cultivo
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {cultivos.map((cultivo) => (
            <li key={cultivo.id} className="rounded-xl border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-medium">{cultivo.nome}</h2>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                  Sem comunicação
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {cultivo.especie} · {cultivo.ambiente} · umidade ideal {cultivo.umidadeIdealMin}–
                {cultivo.umidadeIdealMax}%
              </p>
              <p className="mt-2 text-xs text-zinc-400">Estação {cultivo.codigoEstacao}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold">Meus cultivos</h1>
      <EmptyState
        titulo="Nenhum cultivo cadastrado"
        descricao="Cadastre seu primeiro cultivo e pareie a estação de sensores para começar o monitoramento."
        acao={
          <Link
            href="/cultivos/novo"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-bloom-600 px-4 py-2 text-sm font-medium text-white hover:bg-bloom-700"
          >
            <Sprout className="h-4 w-4" /> Cadastrar cultivo
          </Link>
        }
      />
    </div>
  )
}
