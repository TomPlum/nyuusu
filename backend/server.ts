import express, { Express } from 'express'
import https from 'https'

const app: Express = express()
const PORT = 4000

const callNewsCatcherAPI = () => {
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

app.get('/news', async (_req, res) => {
  try {
    const result = await callNewsCatcherAPI()

    res.status(200)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(result))
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

app.listen(PORT, () => {
  console.log(`Nyusu API listening on PORT ${PORT}`)
})

export default app