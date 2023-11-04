import useAnkiConnect from "api/clients/useAnkiConnect"
import { useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"

export const useGetAnkiDecksQueryKey = () => {
  return [queryKeys.getAnkiDecks]
}

const useGetAnkiDecks = () => {
  const client = useAnkiConnect<undefined, string[]>()

  const getDeckNames = useCallback(async () => {
    const { result } = await client.call('deckNames')
    return result
  }, [client])

  const queryKey = useGetAnkiDecksQueryKey()

  return useQuery({
    queryKey,
    queryFn: getDeckNames,
    retry: 0
  })
}

export default useGetAnkiDecks