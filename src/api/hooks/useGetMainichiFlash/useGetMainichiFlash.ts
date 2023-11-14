import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"
import { useCallback } from "react"
import useMainichiRss from "api/clients/useMainichiRss"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { NewsSource } from "modules/Settings/context/types.ts"

export const useGetMainichiFlashQueryKey = () => {
  return [queryKeys.getMainichiFlash]
}

const useGetMainichiFlash = () => {
  const client = useMainichiRss()
  const { sources } = useSettingsContext()

  const getFlashFeed = useCallback(async () => {
    return await client.parseURL('https://mainichi.jp/rss/etc/mainichi-flash.rss')
  }, [client])

  const queryKey = useGetMainichiFlashQueryKey()

  return useQuery({
    queryKey,
    enabled: sources.includes(NewsSource.MAINICHI_RSS_FLASH_NEWS),
    queryFn: getFlashFeed
  })
}

export default useGetMainichiFlash