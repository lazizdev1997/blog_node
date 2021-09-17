const mongoose = require('mongoose');

const connectDB = async () => {
	try{
         const uri = process.env.MONGO_URI
         const conn = await mongoose.connect(uri, {
         	useCreateIndex: true,
         	useFindAndModify: false,
         	useNewUrlParser: true,
            useUnifiedTopology: true
         })
         console.log(`mongo ulandi ${conn.connection.host}`)
	} catch(err) {
		console.log(err)
	}
}

module.exports = connectDB