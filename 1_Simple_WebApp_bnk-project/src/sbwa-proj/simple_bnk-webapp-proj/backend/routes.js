// plik routes.js

const router = require('express').Router
const bcrypt = require('bcrypt')
const AccountModel = require('./account-model')

router.post('/register', async (req, res) => {
	const userData = req.body
	
	const accountExist = await AccountModel.findOne({email: userData.email})
	if(accountExist) {
		return res.json({
			success: false,
			message: 'user alredy exists'
		})
	}
	
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(userData.password, salt)
	
	userData.password = hashedPassword
	
	const newAccount = new AccountModel(userData)
	
	await NewAccount.save()
	
	return res.json({
		success: true,
		message: 'account created ;>'
})

router.post('./login', (req, res) => {

})

module.exports = router})