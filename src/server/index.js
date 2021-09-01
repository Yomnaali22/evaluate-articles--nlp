const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
var path = require('path')
const axios = require('axios')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
let bodyParser = require('body-parser');


const baseURL = 'http://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`API Key is ${apiKey}`);


const app = express()


app.use(express.static('dist'))

app.use(cors())

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log(__dirname)

app.post('/', async function(request, response) {
    //save the url coming in the post request body from the client side
    url = request.body.url;
    const api = `${baseURL}key=${apiKey}&url=${url}&lang=en`
    await axios.post(api)
    .then(res => response.send(res.data))
    .catch(error => console.error(error))
})


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

