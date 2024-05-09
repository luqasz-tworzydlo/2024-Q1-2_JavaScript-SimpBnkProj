//plik: connect.js

const mongoose = require('mongoose')

function connectToMongoDB() {
    try {
        mongoose.connect('<<<removed connection string for a security reasons>>>')
        console.log('db connected...')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongoDB