import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import cards from './model/CardSchema'

//config
const app = express()
const port = process.env.PORT || 8001
const db_uri = 'mongodb+srv://cluster-m.lzcr9pg.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

//route
app.get('/', (req, res) => res.status(200).send('backend runnig'))

app.post('dating/cards', (req, res) => {
  const dbcard = req.body
  cards.create(dbcard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.get('/dating/cards', (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => console.log(`listening on port: ${port}`))
