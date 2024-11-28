const express = require('express');
const { ApiKeyManager } = require('@esri/arcgis-rest-request');
const {getGeolocation} = require('./helper');
require('dotenv').config()


// import {bodyParser} from 'body-parser';

const app = express();

const PORT = 3000;

const apiKey = process.env.APIKEY;

console.log(apiKey);
const auth = ApiKeyManager.fromKey(apiKey);

const address = {
    address: '1 Goreway Drive',
    postal: "LP0 0AT",
    countryCode: "Canada",
}

getGeolocation( apiKey, address)
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error.message)
}

);


app.get('/', async (req,res)=>{
// console.log(getGeolocation);?

    res.send("Server is up!!");
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})