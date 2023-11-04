import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { useMutation } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"
import { CreateAnkiModelParams } from "api/hooks/useCreateAnkiModel/types.ts"

export const useCreateAnkiModelMutationKey = () => {
  return [queryKeys.createAnkiModel]
}

const useCreateAnkiModel = () => {
  const client = useAnkiConnect<CreateAnkiModelParams, string>()

  const addModel = useCallback(async (params: CreateAnkiModelParams) => {
    return await client.call('createModel', params)
  }, [client])

  const mutationKey = useCreateAnkiModelMutationKey()

  return useMutation({
    mutationKey,
    mutationFn: addModel
  })
}

export default useCreateAnkiModel