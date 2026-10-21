import { FormCultivo } from "@/components/forms/FormCultivo"

export default function PaginaNovoCultivo() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Novo cultivo</h1>
        <p className="text-sm text-zinc-500">
          Preencha os dados abaixo e pareie a estação de sensores ESP32.
        </p>
      </header>
      <FormCultivo />
    </div>
  )
}
