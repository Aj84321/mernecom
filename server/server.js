const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello, this is your GET API response!'
    });
});

app.use(express.json());

// For parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,()=>{
    console.log("Server is Running")
})
//Routes 

app.use('/user',require('./routes/userRouter'))


//connect mongoDB

const URI = process.env.MONGODB_URL;


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})