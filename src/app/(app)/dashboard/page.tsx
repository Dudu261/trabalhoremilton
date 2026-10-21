"use client"

import Link from "next/link"
import { Sprout } from "lucide-react"
import { Skeleton } from "@/app/components/ui/Estados"
import { useCultivos } from "@/app/lib/cultivos"

export default function DashboardPage() {
  const { cultivos, carregando } = useCultivos()

  if (carregando) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-zinc-600">Resumo dos seus cultivos e estações.</p>
      </header>

      <section className="rounded-xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">Cultivos cadastrados</p>
            <p className="mt-1 text-3xl font-semibold">{cultivos.length}</p>
          </div>
          <Sprout className="h-8 w-8 text-bloom-600" />
        </div>
      </section>

      {cultivos.length === 0 ? (
        <section className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center">
          <h2 className="font-medium">Nenhum cultivo cadastrado ainda</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Cadastre um cultivo para acompanhar seus dados aqui.
          </p>
          <Link
            href="/cultivos/novo"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-bloom-600 px-4 py-2 text-sm font-medium text-white hover:bg-bloom-700"
          >
            <Sprout className="h-4 w-4" /> Cadastrar cultivo
          </Link>
        </section>
      ) : (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Meus cultivos</h2>
            <Link href="/cultivos" className="text-sm font-medium text-bloom-700 hover:underline">
              Ver todos
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {cultivos.map((cultivo) => (
              <li key={cultivo.id} className="rounded-xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">{cultivo.nome}</h3>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    Sem comunicação
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{cultivo.especie} · {cultivo.ambiente}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  Umidade ideal: {cultivo.umidadeIdealMin}–{cultivo.umidadeIdealMax}%
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}