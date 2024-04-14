const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresControllers');

router.get('/api/genres', apiGenresController.list);
router.get('/api/genres/detail/:id', apiGenresController.detail);


module.exports = router;