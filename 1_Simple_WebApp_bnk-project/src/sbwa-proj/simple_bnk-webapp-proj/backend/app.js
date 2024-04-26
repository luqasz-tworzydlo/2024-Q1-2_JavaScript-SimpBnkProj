const express = require('express')
const cors = require('cors')
const connectToMongoDB = require ('./connect')
const router = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

connectToMongoDB()
app.use('/', router)

app.listen(3333, () => console.log('serwer działa'))

