const { Schema, model } = require('mongoose');


const userSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	phone: {
		type: String,
		require: true
	},
	password: {
		type: String,
		required: true,
		min: 8
	}
})

module.exports = model('User', userSchema)