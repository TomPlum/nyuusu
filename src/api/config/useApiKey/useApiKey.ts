import { ApiKeyResponse } from "./types.ts"

const useApiKey = (): ApiKeyResponse => {
  return {
    newsApi: import.meta.env.VITE_NEWS_API_KEY
  }
}

export default useApiKey