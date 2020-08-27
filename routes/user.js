
const express = require('express');
const path = require('path');

const router = express.Router();

const backprops = require('./back');

const mycontrollers = require('../controllers/shopcontroller');

router.use('/products',mycontrollers.showproducts);

router.use("/addproduct",mycontrollers.addproduct);

module.exports = {
    "router": router,
}