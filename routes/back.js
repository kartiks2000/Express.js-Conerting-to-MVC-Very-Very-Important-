
const express = require('express');

const router = express.Router();

const mycontrollers = require('../controllers/shopcontroller');




router.use("/addpro",mycontrollers.addpro);

module.exports = {
    "router" :router,
};