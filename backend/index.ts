import express, { Express } from 'express'
import bodyParser from "body-parser"
import news from './api/news'
import translate from './api/translate'

const app: Express = express()
app.use(bodyParser.json())

app.use('/news', news)
app.use('/translate', translate)

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
  console.log(`Nyusu API listening on PORT ${PORT}`)
})

export default app