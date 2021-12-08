const express = require('express');
const path = require('path');
const indexController = require('./controller/indexController.js');

const router = express.Router()

router.get('/',indexController.index);
router.post('/salvar',indexController.salvar);

module.exports = router;