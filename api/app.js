const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000; 

//Config basic middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import Routes
const loginRouter = require("./routes/login");
const petsRouter = require("./routes/pets");

//Use routes
app.use('/api/v1', loginRouter, petsRouter); //Use all routes in the 'api/v1' path

//Config the app PORT
app.listen(PORT, () => {
    console.log(`Servidor andando en ${PORT}!`)
});