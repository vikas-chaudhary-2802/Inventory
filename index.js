const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000;

const cors = require('cors') 

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log('example app listening on port ${port}');
});