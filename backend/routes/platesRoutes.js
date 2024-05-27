const express = require('express');

const router = express.Router();

const {
  getPlates,
  getPlateById,
  createPlate,
  updatePlate,
  deletePlate,
} = require('../controllers/platesController');

router.get('/', getPlates);
router.get('/:id', getPlateById);

module.exports = router;
