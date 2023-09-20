import axios, { AxiosInstance } from "axios"
import { ClientProps } from "./types.ts"
import { useState } from "react"

const useClient = ({ host, contextRoot }: ClientProps): AxiosInstance => {
    const [client] = useState<AxiosInstance>(createInstance)

    function createInstance(): AxiosInstance {
        const instance = axios.create()
        instance.defaults.baseURL = `${host}${contextRoot}`
        return instance
    }

    return client
}

export default useClient