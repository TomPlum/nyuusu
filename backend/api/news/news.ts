import https, { RequestOptions } from "https"
import express from 'express'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const result = await callNewsCatcherAPI()

    res.status(200)
    res.set('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.setHeader('Access-Control-Allow-Origin', 'https://nyusu.org')
    res.send(JSON.stringify(result))
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

const options: RequestOptions = {
  hostname: 'api.newscatcherapi.com',
  path: '/v2/latest_headlines?countries=JP&lang=ja',
  headers: {
    'x-api-key': process.env.NEWSCATCHER_API_KEY
  }
}

const callNewsCatcherAPI = () => {
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
      console.error(err)
      reject(new Error('Something went wrong'))
    })
  })
}

export default router