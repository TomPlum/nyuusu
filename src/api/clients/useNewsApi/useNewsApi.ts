import useClient from "api/clients/useClient"
import { AxiosInstance } from "axios"

const useNewsApi = (): AxiosInstance => {
    return useClient({
        host: 'https://newsapi.org',
        contextRoot: '/v2'
    })
}

export default useNewsApi