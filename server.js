const express = require('express');
const app = express();
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const dotenv = require('dotenv');
const path = require('path');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session)

dotenv.config()


const store = new MongoStore({
	uri: process.env.MONGO_URI,	
	collection: 'sessions'
})



app.use(express.static('public'));
app.engine('hbs', exphbs({extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use('/', require('./routes/homeRouter'));
app.use('/auth', require('./routes/authRouter'));
app.use('/addPost', require('./routes/postRoutes'));


connectDB();




PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`)
})