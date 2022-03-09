const express = require('express')
const { append } = require('express/lib/response')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()



// MIDDLEWARE. this runs before we send responses
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes here

app.get('/', (req,res) => {
    res.send('Welcome to our app about breads!');
})



  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)



// listen

app.listen(PORT, () =>  {
    console.log('nomming at port', PORT);
})