const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const Cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/css', express.static('./css/bootstrap.min.css'));
app.use('/js', express.static('./js/bootstrap.min.js'));

const indexRouter = require('./routes/home')
const donorsRouter = require('./routes/donor')
const recepientRouter = require('./routes/recepient')
app.use('/', indexRouter)
app.use('/bloodDonor', donorsRouter)
app.use('/bloodRecepients', recepientRouter)


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Blood-Bank')
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Conection Succeded'))

app.listen(process.env.PORT || 3000)

// var corsOptions = {
//   origin: "http://localhost:8100"
// };

// app.use(Cors(corsOptions));
