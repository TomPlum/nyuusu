import useClient from "api/clients/useClient"
import { AxiosInstance } from "axios"
import { hosts } from "api/hosts.ts"

const useNewsApi = (): AxiosInstance => {
    return useClient({
        host: hosts[import.meta.env.MODE].newsApi,
        contextRoot: '/v2'
    })
}

export default useNewsApi