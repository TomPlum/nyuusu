import express, { Response } from 'express'

interface GetRssFeedProps {
  url: string
  res: Response
}

const getRssFeed = async ({ url, res }: GetRssFeedProps) => {
  try {
    const response = await fetch(url, { method: 'GET' })
    res.status(200)
    res.set('Content-Type', 'application/xml')
    res.send(JSON.stringify(await response.text()))
  } catch (e) {
    console.error(e)
    res.status(500)
    res.send('An unknown error has occurred')
  }
}

const router = express.Router()

router.get('/mainichi', async (_req, res) => {
  return getRssFeed({
    res,
    url: 'https://mainichi.jp/rss/etc/mainichi-flash.rss'
  })
})

router.get('/asahi', async (_req, res) => {
  return getRssFeed({
    res,
    url: 'https://rss.asahi.com/rss/asahi'
  })
})

router.get('/japan-times', async (_req, res) => {
  return getRssFeed({
    res,
    url: 'https://japantimes.co.jp/feed'
  })
})

export default router