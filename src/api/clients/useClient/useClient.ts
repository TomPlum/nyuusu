import axios, { AxiosInstance } from "axios"
import { ClientProps } from "./types.ts"
import { useState } from "react"

const useClient = ({ host, contextRoot, headers }: ClientProps): AxiosInstance => {
  const [client] = useState<AxiosInstance>(createInstance)

  function createInstance(): AxiosInstance {
    const instance = axios.create()

    instance.defaults.baseURL = `${host}${contextRoot}`

    if (headers) {
      instance.interceptors.request.use((config) => {
        Object.entries(headers).forEach(([header, value]) => {
          config.headers[header] = value
        })

        return config
      })
    }

    return instance
  }

  return client
}

export default useClient