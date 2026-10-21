"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell, CreditCard, LayoutDashboard, Leaf,
  MessageSquare, ScanSearch, Sprout,
} from "lucide-react"

const itens = [
  { href: "/dashboard", label: "Dashboard", icone: LayoutDashboard },
  { href: "/cultivos", label: "Cultivos", icone: Sprout },
  { href: "/diagnostico/novo", label: "Diagnóstico", icone: ScanSearch },
  { href: "/consultoria", label: "Consultoria", icone: MessageSquare },
  { href: "/planos", label: "Planos", icone: CreditCard },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const estaAtivo = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-4 md:pl-64">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-bloom-600" />
          <span className="font-semibold">BloomGuard</span>
        </div>
        <Bell className="h-5 w-5 text-zinc-500" />
      </header>

      {/* Barra lateral — apenas desktop */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-56 flex-col gap-1 border-r border-zinc-200 bg-white p-4 pt-20 md:flex">
        {itens.map(({ href, label, icone: Icone }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
              estaAtivo(href)
                ? "bg-bloom-100 font-medium text-bloom-700"
                : "text-zinc-600 hover:bg-zinc-50"
            }`}
          >
            <Icone className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </aside>

      {/* Conteúdo */}
      <main className="p-4 pt-6 md:pl-64">{children}</main>

      {/* Menu inferior — apenas mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-zinc-200 bg-white md:hidden">
        {itens.map(({ href, label, icone: Icone }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] ${
              estaAtivo(href) ? "text-bloom-700" : "text-zinc-500"
            }`}
          >
            <Icone className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}