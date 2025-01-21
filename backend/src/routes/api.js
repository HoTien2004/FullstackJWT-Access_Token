const express = require('express');
const { createUser, handleLogin, getUser } = require('../controllers/userController');
const delay  = require('../middleware/delay');

const routerAPI = express.Router();

// set middleware cho tất cả các routes
routerAPI.all('*', delay);

routerAPI.get('/' ,(req, res) => {
    return res.status(200).json("Hello v1 api");
});

routerAPI.post('/register', createUser);
routerAPI.post('/login', handleLogin);
routerAPI.get('/user', getUser);

module.exports = routerAPI; //export default