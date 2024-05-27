const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const platesSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const Plate = mongoose.model('Plate', platesSchema);
module.exports = Plate;
