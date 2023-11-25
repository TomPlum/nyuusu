import express, { Express } from 'express'
import { callNewsCatcherAPI } from "./news.ts"
import { callDeeplApi, DeeplTranslationRequest } from "./translate.ts"
import bodyParser from "body-parser"

const app: Express = express()
app.use(bodyParser.json())
const PORT = 4000

app.get('/news', async (_req, res) => {
  try {
    const result = await callNewsCatcherAPI()

    res.status(200)
    res.set('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.send(JSON.stringify(result))
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

app.post<DeeplTranslationRequest, string, DeeplTranslationRequest>('/translate', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Nyusu API listening on PORT ${PORT}`)
})

export default app