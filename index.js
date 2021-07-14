//import dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();

//initialize express
const app = express()

//initalize a port
const SERVER_PORT = process.env.PORT || 5002;

//initalize middleware
app.use(express.json());
app.use(cors())
app.use(morgan(':method :url :response-time'))

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB")).catch((err)=>{console.log(err)})

//basic SANITY check greeting for deployed API
app.get('/', (req, res)=>{res.send("Hello Hydrogen Pod!")})

//import routes
const noteRoute = require('./routes/notes')

//initialize routes
app.use('/api/notes', noteRoute)

//port listening
app.listen(SERVER_PORT, ()=>{console.log(`Server running at ${SERVER_PORT}`)})