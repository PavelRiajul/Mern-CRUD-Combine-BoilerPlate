const express = require('express')
const router = require('./src/routes/api')
const app = new express();
const bodyParser = require('body-parser')
const path = require('path')


//Security middleware
const rateLimit = require('express-rate-limit')
const helmet =require('helmet')
const mongoSanitizie = require('express-mongo-sanitize')
const xss= require('xss-clean')
const hpp =require('hpp')
const cors = require('cors')

//Database
const mongoose = require('mongoose')

//Security middleware Implement
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitizie())
app.use(helmet())

//Body Parser
app.use(bodyParser.json())


//Rate Limiter
const limiter = rateLimit({window:15*60*100,max:3000})
app.use(limiter)
//Database connection
let URI = "mongodb+srv://riajul:riajul1234@cluster0.zjr1bbg.mongodb.net/students"
mongoose.connect(URI)





//Frontend Tagging/connected(managing Front End Routing)

app.use(express.static('client-side/dist'))
app.get("*",function(req,res){
    res.sendFile(path.resolve(__dirname,'client-side','dist','index.html'))
})


//Managing Backend API Routing
app.use("/api/v1",router)

module.exports=app;