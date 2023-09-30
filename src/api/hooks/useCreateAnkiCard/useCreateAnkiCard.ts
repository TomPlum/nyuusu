import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { CreateAnkiCardParams, CreateAnkiCardRequest } from "api/hooks/useCreateAnkiCard/types.ts"
import { queryKeys } from "api/queryKeys.ts"
import { useMutation } from "@tanstack/react-query"

export const useCreateAnkiCardMutationKey = () => {
  return [queryKeys.createAnkiCard]
}

const useCreateAnkiCard = () => {
  const client = useAnkiConnect()

  const addCard = useCallback(async (params: CreateAnkiCardParams) => {
    return await client.post<object, object, CreateAnkiCardRequest>('', {
      action: 'addNote',
      version: 6,
      params
    })
  }, [client])

  const queryKey = useCreateAnkiCardMutationKey()

  return useMutation(queryKey, addCard)
}

export default useCreateAnkiCard