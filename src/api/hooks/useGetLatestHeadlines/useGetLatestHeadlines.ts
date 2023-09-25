import useNewsCatcherAPI from "api/clients/useNewsCatcherApi"
import { useCallback } from "react"
import { NewsCatcherHeadlinesResponse } from "api/hooks/useGetLatestHeadlines/types.ts"
import { queryKeys } from "api/queryKeys.ts"
import { useQuery } from "@tanstack/react-query"

export const useGetLatestHeadlinesQueryKey = () => {
  return [queryKeys.getNewsCatcherHeadlines]
}

const useGetLatestHeadlines = () => {
  const client = useNewsCatcherAPI()

  const getLatestHeadlines = useCallback(async () => {
    const { data } = await client.get<NewsCatcherHeadlinesResponse>('/newscatcher-api-headlines')
    return data
  }, [client])

  const queryKey = useGetLatestHeadlinesQueryKey()

  return useQuery(queryKey, getLatestHeadlines)
}

export default useGetLatestHeadlines