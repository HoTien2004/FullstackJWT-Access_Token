const express = require('express');
const { createUser, handleLogin, getUser, getAccount } = require('../controllers/userController');
const auth  = require('../middleware/auth');
const delay  = require('../middleware/delay');

const routerAPI = express.Router();

// set middleware cho tất cả các routes
routerAPI.all('*', auth);

routerAPI.get('/' ,(req, res) => {
    return res.status(200).json("Hello v1 api");
});

routerAPI.post('/register', createUser);
routerAPI.post('/login', handleLogin);
routerAPI.get('/user', getUser);
routerAPI.get('/account', delay, getAccount);

module.exports = routerAPI; //export default