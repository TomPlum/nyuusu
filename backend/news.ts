import https, { RequestOptions } from "https"

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
      reject(new Error(String(err)))
    })
  })
}

export {
  callNewsCatcherAPI
}