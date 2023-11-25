export interface DeeplTranslationRequest {
    text: string[]
    source_lang: string
    target_lang: string
}

export interface DeeplTranslationResponse {
  translations: DeeplTranslation[]
}

export interface DeeplTranslation {
  detected_source_language: string
  text: string
}

const callDeeplApi = (request: DeeplTranslationRequest): Promise<DeeplTranslationResponse> => {
  return fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
    }
  }).then((response) => {
    return response.json() as Promise<DeeplTranslationResponse>
  }).catch((e) => {
    console.error(e)
    throw Error(String(e))
  })
}

export {
  callDeeplApi
}