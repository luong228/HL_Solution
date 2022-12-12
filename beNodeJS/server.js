const express = require('express');
let app = express();
var cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config({
    path: '.env',
});

let port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)
