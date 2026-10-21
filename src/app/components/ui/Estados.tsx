import { type ReactNode } from "react"
import { AlertTriangle, Leaf, RefreshCw } from "lucide-react"
import { Button } from "@/app/components/ui/Button"

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-zinc-200 ${className}`} />
}

export function EmptyState({
  titulo,
  descricao,
  acao,
}: {
  titulo: string
  descricao: string
  acao?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-zinc-300 p-10 text-center">
      <Leaf className="h-10 w-10 text-zinc-300" />
      <h3 className="font-medium text-zinc-700">{titulo}</h3>
      <p className="max-w-sm text-sm text-zinc-500">{descricao}</p>
      {acao}
    </div>
  )
}

export function ErrorState({
  titulo = "Algo deu errado",
  descricao = "Não foi possível carregar os dados. Verifique a conexão e tente novamente.",
  aoTentarNovamente,
}: {
  titulo?: string
  descricao?: string
  aoTentarNovamente?: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-10 text-center">
      <AlertTriangle className="h-10 w-10 text-red-400" />
      <h3 className="font-medium text-red-700">{titulo}</h3>
      <p className="max-w-sm text-sm text-red-600">{descricao}</p>
      {aoTentarNovamente && (
        <Button variante="secundario" onClick={aoTentarNovamente} className="mt-2">
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      )}
    </div>
  )
}