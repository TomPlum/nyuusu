import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { CreateAnkiDeckParams } from "api/hooks/useCreateAnkiDeck/types.ts"
import { queryKeys } from "api/queryKeys.ts"
import { useMutation } from "@tanstack/react-query"

export const useCreateAnkiDeckMutationKey = () => {
  return [queryKeys.createAnkiDeck]
}

const useCreateAnkiDeck = () => {
  const client = useAnkiConnect<CreateAnkiDeckParams, string>()

  const createDeck = useCallback(async (params: CreateAnkiDeckParams) => {
    const { result } = await client.call('createDeck', params)
    return result
  }, [client])

  const mutationKey = useCreateAnkiDeckMutationKey()

  return useMutation({
    mutationKey,
    mutationFn: createDeck
  })
}

export default useCreateAnkiDeck