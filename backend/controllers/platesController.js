const asyncHandler = require('express-async-handler');
const Plate = require('../models/platesModel');

const getPlates = asyncHandler(async (req, res) => {
  const plates = await Plate.find();
  res.status(200).json(plates);
});

const getPlateById = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const plate = await Plate.findOne({ id });
  if (plate) {
    res.status(200).json(plate);
  } else {
    res.status(404);
    throw new Error('Plate not found');
  }
});

module.exports = { getPlates, getPlateById };
