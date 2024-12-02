const express = require('express');
const contactlist = require("../models/contactdetail.model.js");
const router = express.Router();
const { createContactDetail , getcontactDetail} = require('../controllers/contactdetail.controller.js')


router.post("/",createContactDetail);
router.get('/', getcontactDetail);

module.exports = router;