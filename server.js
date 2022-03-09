const express = require('express')
const { append } = require('express/lib/response')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()


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