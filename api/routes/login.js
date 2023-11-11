const loginRouter = require('express').Router();
const loginController = require('../controllers/login');

loginRouter.post('/login', loginController);

module.exports = loginRouter;