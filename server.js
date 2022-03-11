const express = require('express')
const { append } = require('express/lib/response')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()



// MIDDLEWARE. this runs before we send responses
// always goes above the routes!
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))


//routes here

app.get('/', (req,res) => {
    res.send('Welcome to our app about breads!');
})



  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

  // 404 Page
app.get('*', (req, res) => {
  res.send('405')
})


// listen

app.listen(PORT, () =>  {
    console.log('nomming at port', PORT);
})