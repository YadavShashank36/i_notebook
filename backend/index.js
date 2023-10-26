const connectToMongo =require('./db');
connectToMongo(); 
const express = require('express')
const app = express()
const port=5000
const cors = require('cors');

app.use(cors());

   app.use(express.json());
//available routes
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port,()=>
 console.log(`example app is listen on port ${port}`))
 