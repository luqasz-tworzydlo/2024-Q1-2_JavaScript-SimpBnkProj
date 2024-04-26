const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/register', function (req, res) {

    const clientData = req.body

    console.log(clientData)
    res.send("register ok")
})

app.get('/get-account', function (req, res) {
    res.send({
        account_no: '2342342323423',
        history: [23, 45, 843, 75]
    })
})

app.get('/get-user', function (req, res) {
    res.send({
        name: 'jasio',
        age: 23,
        city: 'Sopot'
    })
})

app.listen(3333, () => console.log('serwer działa'))

