const express = require('express');
const router = express.Router();
const homePage = require('../controllers/index')

// get homePagecontroller from '../controllers/index'
router.get('/', homePage.homepageController);

// export router to be used in app.js
module.exports = router;