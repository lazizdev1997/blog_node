const { Schema, model } = require('mongoose');


let date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getYear()


if(day < 10) {
	day = '0' + day
}

if (month < 10) {
	month = '0' + month
}


const blogSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		min: 10
	},
	images: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true,
		min: 10
	},
	slugUrl: {
		type: String,
		unique: true
	},
    createdat: {
    	type: String,
    	default: `${day}.${month}.${year}`
    }
})