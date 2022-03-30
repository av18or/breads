const express = require('express');
const { append } = require('express/lib/response');
const methodOverride = require('method-override');
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)


// MIDDLEWARE. this runs before we send responses
// always goes above the routes!
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//routes here

app.get('/', (req,res) => {
    res.send('Welcome to our app about breads!');
})



  
  // breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
});


// listen

app.listen(PORT, () =>  {
    console.log('nomming at port', PORT);
})