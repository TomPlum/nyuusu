import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"
import { GetAnkiModelsProps } from "api/hooks/useGetAnkiModels/types.ts"

export const useGetAnkiModelsQueryKey = () => {
  return [queryKeys.getAnkiModels]
}

const useGetAnkiModels = ({ enabled }: GetAnkiModelsProps = {}) => {
  const client = useAnkiConnect<undefined, string[]>()

  const getDeckNames = useCallback(async () => {
    const { result } = await client.call('modelNames')
    return result
  }, [client])

  const queryKey = useGetAnkiModelsQueryKey()

  return useQuery({
    queryKey,
    queryFn: getDeckNames,
    enabled,
    retry: 0
  })
}

export default useGetAnkiModels