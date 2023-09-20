import { useQuery } from "@tanstack/react-query"
import { useCallback } from "react"
import useNewsApi from "../../clients/useNewsApi"
import useApiKey from "../../config/useApiKey"
import { queryKeys } from "../../queryKeys.ts"
import { NewsHeadlineResponse } from "./types.ts"

export const useGetHeadlineQueryKey = () => {
    return [queryKeys.getHeadline]
}

const useGetHeadline = () => {
    const client = useNewsApi()
    const { newsApi } = useApiKey()

    const getHeadline = useCallback(async () => {
        const url = `/top-headlines?country=jp&apiKey=${newsApi}`
        const { data } = await client.get<NewsHeadlineResponse>(url)
        return data
    }, [client, newsApi])

    return useQuery(useGetHeadlineQueryKey(), getHeadline)
}

export default useGetHeadline