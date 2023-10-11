import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { CreateAnkiCardParams, CreateAnkiCardProps } from "api/hooks/useCreateAnkiCard/types.ts"
import { queryKeys } from "api/queryKeys.ts"
import { useMutation } from "@tanstack/react-query"
import { AnkiConnectAction } from "api/clients/useAnkiConnect/types.ts"

export const useCreateAnkiCardMutationKey = () => {
  return [queryKeys.createAnkiCard]
}

const useCreateAnkiCard = ({ useGraphicalInterface }: CreateAnkiCardProps = {}) => {
  const client = useAnkiConnect<CreateAnkiCardParams, string>()

  const addCard = useCallback(async (params: CreateAnkiCardParams) => {
    const action: AnkiConnectAction = useGraphicalInterface ? 'guiAddCards' : 'addNote'
    return await client.call(action, params)
  }, [client, useGraphicalInterface])

  const queryKey = useCreateAnkiCardMutationKey()

  return useMutation(queryKey, addCard)
}

export default useCreateAnkiCard