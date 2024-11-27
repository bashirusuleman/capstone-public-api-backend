import express from 'express';
import { ApiKeyManager } from '@esri/arcgis-rest-request';
import { geocode } from '@esri/arcgis-rest-geocoding';
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000;


const apiKey = "AAPT3NKHt6i2urmWtqOuugvr9YNn4lOFkTuR9b6n-OMbeSUQZEwmGbx7voV1JKXPY4OV2WmH0St9QVVz0wPIHSAOXU5XgrLMgF7BOL2U6jVtM0Yw-HQmabb0CpdvcpEADFH79E9Bx2EbOmpa3T4FegduHUNnuivaLa9jzjEDktThAI8inLvU9ICs0nAnvMMRcHjuBpSCg9MuLcCDEnUwa6pbV_HsL4PS2AIlgMm0QjpndtM.";

const authentication = ApiKeyManager.fromKey(apiKey);

geocode({
    address: "7405 Goreway Drive Missisauga",
    postal: "L4T 0A3",
    countryCode: "Canada",
    authentication    
}).then((response)=>{
    console.log(response.candidates);
})

app.get('/',(req,res)=>{
    res.send('Server is up!');
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})