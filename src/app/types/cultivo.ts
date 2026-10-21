export type Ambiente = "interno" | "externo" | "estufa"

export interface Cultivo {
  id: string
  nome: string
  especie: string
  ambiente: Ambiente
  dataInicio: string // dd/mm/aaaa
  umidadeIdealMin: number
  umidadeIdealMax: number
  codigoEstacao: string
  statusEstacao: "ativa" | "sem_comunicacao"
}