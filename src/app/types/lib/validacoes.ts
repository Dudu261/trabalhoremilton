import { z } from "zod"

const umidade = (rotulo: string) =>
  z
    .string()
    .min(1, `Informe a umidade ${rotulo}`)
    .refine((v) => !Number.isNaN(Number(v)), "Informe um número válido")
    .refine((v) => Number(v) >= 0 && Number(v) <= 100, "O valor deve estar entre 0 e 100")

export const esquemaCultivo = z
  .object({
    nome: z.string().min(3, "Informe um nome com pelo menos 3 caracteres"),
    especie: z.string().min(3, "Informe a espécie cultivada"),
    ambiente: z.string().min(1, "Selecione o ambiente"),
    dataInicio: z
      .string()
      .min(10, "Informe a data de início")
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato dd/mm/aaaa"),
    umidadeIdealMin: umidade("mínima"),
    umidadeIdealMax: umidade("máxima"),
    codigoEstacao: z
      .string()
      .regex(/^BG-\d{4}$/, "Use o formato BG-0000, ex.: BG-0142"),
  })
  .refine((d) => Number(d.umidadeIdealMin) < Number(d.umidadeIdealMax), {
    message: "A umidade mínima deve ser menor que a máxima",
    path: ["umidadeIdealMax"],
  })

export type FormularioCultivo = z.infer<typeof esquemaCultivo>