import express, { Express } from 'express'
import https from 'https'

const app: Express = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`Nyusu API listening on PORT ${PORT} `)
})

const callNewscatcherAPI = () => {
  const options = {
    hostname: 'api.newscatcherapi.com',
    path: '/v2/latest_headlines?countries=JP&lang=ja',
    headers: {
      'x-api-key': process.env.NEWSCATCHER_API_KEY
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.get(options, res => {
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
  })
}

app.get('/news', async () => {
  try {
    const result = await callNewscatcherAPI()

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error,
    }
  }
})