const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000; 

//Config basic middlewares
const ensureAuth = require('./middlewares/authentication');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public'))) 

//Import Routes
const loginRouter = require("./routes/login");
const petsRouter = require("./routes/pets");


//Use routes
app.use('/api/v1', loginRouter, petsRouter); //Use all routes in the 'api/v1' path

//Main route
app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname, '..', 'public', 'views'),
    };
    res.status(200).sendFile('index.html', options);
});

app.get('/register', (req, res) => {
    const options = {
        root: path.join(__dirname, '..', 'public', 'views'),
    };
    res.status(200).sendFile('register.html', options);
});

app.get('/menu', ensureAuth, (req, res) => {
    const options = {
        root: path.join(__dirname, '..', 'public', 'views'),
    };
    res.status(200).sendFile('menu.html', options);
});

app.get('/addpet', ensureAuth, (req, res) => {
    const options = {
        root: path.join(__dirname, '..', 'public', 'views'),
    };
    res.status(200).sendFile('register-animal.html', options);
});

//Config the app PORT
app.listen(PORT, () => {
    console.log(`Servidor andando en ${PORT}!`)
});