"use client"

import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Input, Select } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import { cadastrarCultivo } from "@/app/lib/cultivos"
import { esquemaCultivo, type FormularioCultivo } from "@/app/types/lib/validacoes"
import { mascararData, mascararEstacao } from "@/app/lib/mascaras"

export function FormCultivo() {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormularioCultivo>({
    resolver: zodResolver(esquemaCultivo),
    defaultValues: {
      nome: "",
      especie: "",
      ambiente: "",
      dataInicio: "",
      umidadeIdealMin: "",
      umidadeIdealMax: "",
      codigoEstacao: "",
    },
  })

  async function aoEnviar(dados: FormularioCultivo) {
    try {
      await new Promise((r) => setTimeout(r, 1200))
      cadastrarCultivo(dados)
      toast.success("Cultivo cadastrado!", {
        description: `${dados.nome} vinculado à estação ${dados.codigoEstacao}.`,
      })
      router.push("/cultivos")
    } catch {
      toast.error("Não foi possível cadastrar o cultivo.", {
        description: "Tente novamente em instantes.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(aoEnviar)} className="grid gap-4 sm:grid-cols-2">
      <Input
        label="Nome do cultivo"
        placeholder="Ex.: Hortelã da varanda"
        erro={errors.nome?.message}
        {...register("nome")}
      />

      <Input
        label="Espécie"
        placeholder="Ex.: Mentha sp."
        erro={errors.especie?.message}
        {...register("especie")}
      />

      <Select label="Ambiente" defaultValue="" erro={errors.ambiente?.message} {...register("ambiente")}>
        <option value="" disabled>Selecione o ambiente</option>
        <option value="interno">Interno</option>
        <option value="externo">Externo</option>
        <option value="estufa">Estufa</option>
      </Select>

      <Controller
        name="dataInicio"
        control={control}
        render={({ field }) => (
          <Input
            label="Data de início"
            placeholder="dd/mm/aaaa"
            inputMode="numeric"
            erro={errors.dataInicio?.message}
            {...field}
            onChange={(e) => field.onChange(mascararData(e.target.value))}
          />
        )}
      />

      <Input
        label="Umidade ideal mínima (%)"
        inputMode="decimal"
        placeholder="Ex.: 40"
        erro={errors.umidadeIdealMin?.message}
        {...register("umidadeIdealMin")}
      />

      <Input
        label="Umidade ideal máxima (%)"
        inputMode="decimal"
        placeholder="Ex.: 70"
        erro={errors.umidadeIdealMax?.message}
        {...register("umidadeIdealMax")}
      />

      <Controller
        name="codigoEstacao"
        control={control}
        render={({ field }) => (
          <Input
            label="Código da estação"
            placeholder="BG-0000"
            inputMode="numeric"
            erro={errors.codigoEstacao?.message}
            {...field}
            onChange={(e) => field.onChange(mascararEstacao(e.target.value))}
          />
        )}
      />

      <div className="sm:col-span-2">
        <Button type="submit" carregando={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Cadastrando..." : "Cadastrar cultivo"}
        </Button>
      </div>
    </form>
  )
}