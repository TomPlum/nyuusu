import useAsahiRss from "api/clients/useAsahiRss"
import { useCallback } from "react"
import { queryKeys } from "api/queryKeys.ts"
import { useQuery } from "@tanstack/react-query"

export const useGetAsahiHeadlinesQueryKey = () => {
  return [queryKeys.getAsahiHeadlines]
}

export const useGetAsahiHeadlines = () => {
  const client = useAsahiRss()

  const getHeadlines = useCallback(() => {
    return client.parseURL('/newsheadlines.rdf')
  }, [client])

  const queryKey = useGetAsahiHeadlinesQueryKey()

  return useQuery(queryKey, getHeadlines)
}

export default useGetAsahiHeadlines