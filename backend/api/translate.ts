import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const result = await callDeeplApi(req.body)

    res.status(200)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(result))
  } catch (error) {
    res.status(400)
    res.send(String(error))
  }
})

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

const callDeeplApi = async (request: DeeplTranslationRequest): Promise<DeeplTranslationResponse> => {
  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
      }
    })

    return await response.json() as Promise<DeeplTranslationResponse>
  } catch (e) {
    console.error(e)
    throw Error(String(e))
  }
}

export default router