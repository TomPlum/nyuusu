import useLibreTranslate from "api/clients/useLibreTranslate"
import { useCallback } from "react"
import { queryKeys } from "api/queryKeys.ts"
import { useMutation } from "@tanstack/react-query"
import { TranslateRequest } from "api/hooks/useTranslate/types.ts"

export const useTranslateMutationKey = (text: string) => {
  return [queryKeys.translate, text]
}

const useTranslate = ({ text }: TranslateRequest) => {
  const client = useLibreTranslate()

  const translate = useCallback(async () => {
    const request = new FormData()
    request.append('q', text)
    request.append('source', 'en')
    request.append('target', 'ja')

    return await client.postForm('/translate', request)
  }, [client, text])

  const mutationKey = useTranslateMutationKey(text)

  return useMutation(mutationKey, translate)
}

export default useTranslate