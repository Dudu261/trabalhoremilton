import { type ButtonHTMLAttributes } from "react"
import { Loader2 } from "lucide-react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: "primario" | "secundario"
  carregando?: boolean
}

export function Button({
  variante = "primario",
  carregando,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const estilos = {
    primario: "bg-bloom-600 text-white hover:bg-bloom-700",
    secundario: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50",
  }[variante]

  return (
    <button
      {...props}
      disabled={props.disabled || carregando}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${estilos} ${className}`}
    >
      {carregando && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}