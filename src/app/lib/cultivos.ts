"use client"

import { useEffect, useState } from "react"
import type { Ambiente, Cultivo } from "@/app/types/cultivo"
import type { FormularioCultivo } from "@/app/types/lib/validacoes"

const CHAVE_CULTIVOS = "bloomguard:cultivos"
const EVENTO_CULTIVOS = "bloomguard:cultivos-atualizados"

function lerCultivos(): Cultivo[] {
  try {
    const valor = window.localStorage.getItem(CHAVE_CULTIVOS)
    if (!valor) return []

    const dados: unknown = JSON.parse(valor)
    return Array.isArray(dados) ? (dados as Cultivo[]) : []
  } catch {
    return []
  }
}

export function cadastrarCultivo(dados: FormularioCultivo): void {
  const cultivo: Cultivo = {
    id: crypto.randomUUID(),
    nome: dados.nome,
    especie: dados.especie,
    ambiente: dados.ambiente as Ambiente,
    dataInicio: dados.dataInicio,
    umidadeIdealMin: Number(dados.umidadeIdealMin),
    umidadeIdealMax: Number(dados.umidadeIdealMax),
    codigoEstacao: dados.codigoEstacao,
    statusEstacao: "sem_comunicacao",
  }

  const cultivos = lerCultivos()
  window.localStorage.setItem(CHAVE_CULTIVOS, JSON.stringify([...cultivos, cultivo]))
  window.dispatchEvent(new Event(EVENTO_CULTIVOS))
}

export function useCultivos() {
  const [cultivos, setCultivos] = useState<Cultivo[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const atualizar = () => {
      setCultivos(lerCultivos())
      setCarregando(false)
    }

    atualizar()
    window.addEventListener(EVENTO_CULTIVOS, atualizar)
    window.addEventListener("storage", atualizar)

    return () => {
      window.removeEventListener(EVENTO_CULTIVOS, atualizar)
      window.removeEventListener("storage", atualizar)
    }
  }, [])

  return { cultivos, carregando }
}
