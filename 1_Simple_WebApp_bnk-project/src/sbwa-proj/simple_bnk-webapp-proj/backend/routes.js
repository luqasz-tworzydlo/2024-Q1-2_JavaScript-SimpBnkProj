//plik: routes.js

const router = require('express').Router()
const bcrypt = require('bcrypt')
const AccountModel = require('./account-model')

router.post('/register', async (req, res) => {
    const userData = req.body

    const accountExists = await AccountModel.findOne({ email: userData.email })
    if (accountExists) {
        return res.json({
            success: false,
            message: 'user already exists'
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userData.password, salt)

    userData.password = hashedPassword

    // let accountNumber
    let accNo = ' '

    for(let i = 0; i < 20; i++) {
        accNo += Math.floor(Math.random() * 10)
    }

    const newAccount = {
        //accountNumber: '0123456789',
        accountNumber: accNo,
        email: userData.email,
        password: userData.password,
        username: userData.name,
        balance: 0,
        pesel: userData.pesel
    }

    const newAccountModel = new AccountModel(newAccount)

    await newAccountModel.save()

    return res.json({
        success: true,
        message: 'account created ok'
    })

})

router.post('/login', (req, res) => {

})

module.exports = router
