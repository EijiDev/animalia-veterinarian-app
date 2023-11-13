const loginRouter = require('express').Router();
const LoginController = require('../controllers/login');

loginRouter.post('/login', LoginController.logInUser);

loginRouter.post('/register', LoginController.registerUser);

module.exports = loginRouter;