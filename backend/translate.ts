import https, { RequestOptions } from "https"

export interface DeeplTranslationRequest {
    text: string[]
    source_lang: string
    target_lang: string
}

const callDeeplApi = (request: DeeplTranslationRequest) => {
  const requestBody = JSON.stringify(request)

  const options: RequestOptions = {
    method: 'POST',
    hostname: 'api-free.deepl.com',
    path: '/v2/translate',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': requestBody.length,
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let rawData = ''

      res.on('data', chunk => {
        rawData += chunk
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData))
        } catch (err) {
          reject(new Error(String(err)))
        }
      })
    })

    req.on('error', err => {
      reject(new Error(String(err)))
    })

    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Request time out'))
    })

    req.write(requestBody)
    req.end()
  })
}

export {
  callDeeplApi
}