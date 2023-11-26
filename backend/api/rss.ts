import express from 'express'

const router = express.Router()

router.get('/mainichi', async (_req, res) => {
  console.log('RSS')
  try {
    const response = await fetch('https://mainichi.jp/rss/etc/mainichi-flash.rss', {
      method: 'GET'
    })

    res.status(200)
    res.set('Content-Type', 'application/xml')
    res.send(JSON.stringify(await response.text()))
  } catch (e) {
    console.error(e)
    res.status(500)
    res.send('An unknown error has occurred')
  }
})

export default router