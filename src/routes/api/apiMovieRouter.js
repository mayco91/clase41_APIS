const express = require('express');
const router = express.Router();
const apiMovieController = require('../../controllers/api/apiMovieControllers');

router.post("/api/movieCreate", apiMovieController.create)
router.delete("/api/movieDelete", apiMovieController.destroy)

module.exports = router