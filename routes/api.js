const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/all-cocktails', apiController.getAllCocktails);

module.exports = router;
