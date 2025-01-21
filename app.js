import express from 'express'
import dotenv from 'dotenv'
import process from 'process'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('version: 0.0.1') // change this string to ensure a new version deployedmething broke!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
