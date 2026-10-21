import { type InputHTMLAttributes, type SelectHTMLAttributes } from "react"

const base =
  "w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition focus:border-bloom-500 focus:ring-2 focus:ring-bloom-500/20"
const comErro = "border-red-400 focus:border-red-500 focus:ring-red-500/20"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  erro?: string
}

export function Input({ label, erro, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      <input
        {...props}
        aria-invalid={!!erro}
        className={`${base} ${erro ? comErro : "border-zinc-300"}`}
      />
      {erro && <p className="text-xs text-red-600">{erro}</p>}
    </div>
  )
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  erro?: string
}

export function Select({ label, erro, children, ...props }: SelectProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      <select {...props} className={`${base} ${erro ? comErro : "border-zinc-300"}`}>
        {children}
      </select>
      {erro && <p className="text-xs text-red-600">{erro}</p>}
    </div>
  )
}