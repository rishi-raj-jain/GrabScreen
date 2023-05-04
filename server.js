const express = require('express')
const playwright = require('playwright-aws-lambda')

const app = express()

const port = process.env.PORT || 3001

app.get('/', async (req, res) => {
  const { url } = req.query
  const browser = await playwright.launchChromium()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto(url)
  const imageBuffer = await page.screenshot()
  res.setHeader('Content-Type', 'image/png')
  res.send(imageBuffer)
  res.status(200)
})

app.listen(port, () => {})
