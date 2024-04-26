// plik account-model.js

const mongoos = require('mongoose')

const accountSchema = new mongoose.Schema({
	accountNumber: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
	username: {
		type: String,
		required: true
	}
	balance: {
		type: Number,
		required: true,
		default: 0
	},
	pesel: {
		type: String
		required: true
	}
}, {
	timestamps: true
})

const AccountModel = mongoose.model('accounts', accountSchema)

module.exports = AccountModel