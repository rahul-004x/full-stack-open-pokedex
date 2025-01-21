import express from 'express'
import dotenv from 'dotenv'
import process from 'process'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
  next()
})

app.use(express.static('dist'))
app.use(express.json())

app.get('/version', (req, res) => {
  res.send('New version is deployed')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err.stack)
  res.status(500).send('Something broke!')
  next(err)
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})