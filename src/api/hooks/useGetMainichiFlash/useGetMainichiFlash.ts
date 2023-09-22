import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"
import { useCallback } from "react"
import useMainichiRss from "api/clients/useMainichiRss"

export const useGetMainichiFlashQueryKey = () => {
  return [queryKeys.getMainichiFlash]
}

const useGetMainichiFlash = () => {
  const client = useMainichiRss()

  const getFlashFeed = useCallback(async () => {
    return await client.parseURL('https://cors-anywhere.herokuapp.com/https://mainichi.jp/rss/etc/mainichi-flash.rss')
  }, [client])

  const queryKey = useGetMainichiFlashQueryKey()

  return useQuery(queryKey, getFlashFeed)
}

export default useGetMainichiFlash