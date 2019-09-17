const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    productName: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number }
  },
  SchemaOptions
);

module.exports = mongoose.model('Product', ProductSchema);
