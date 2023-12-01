import { useCallback } from "react"
import { NewsCatcherHeadlinesResponse } from "api/hooks/useGetLatestHeadlines/types.ts"
import { queryKeys } from "api/queryKeys.ts"
import { useQuery } from "@tanstack/react-query"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { NewsSource } from "modules/Settings/context/types.ts"
import useVercel from "api/clients/useVercel"

export const useGetLatestHeadlinesQueryKey = () => {
  return [queryKeys.getNewsCatcherHeadlines]
}

const useGetLatestHeadlines = () => {
  const client = useVercel()
  const { sources } = useSettingsContext()

  const getLatestHeadlines = useCallback(async () => {
    const { data } = await client.get<NewsCatcherHeadlinesResponse>('/news')
    return data
  }, [client])

  const queryKey = useGetLatestHeadlinesQueryKey()

  return useQuery({
    queryKey,
    queryFn: getLatestHeadlines,
    enabled: sources.includes(NewsSource.NEWSCATCHER_API)
  })
}

export default useGetLatestHeadlines