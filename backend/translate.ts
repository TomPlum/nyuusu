export interface DeeplTranslationRequest {
    text: string[]
    source_lang: string
    target_lang: string
}

const callDeeplApi = (request: DeeplTranslationRequest) => {
  return fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
    }
  }).then((response) => {
    return response.json()
  }).catch((e) => {
    console.error(e)
  })
}

export {
  callDeeplApi
}