const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
  {
    hospitalName: {
      type: mongoose.Schema.Types.String,
      maxlength: 100,
      required: true
    },
    address: {
      type: mongoose.Schema.Types.String,
      maxlength: 200,
      required: true
    },
    openHours: {
      type: mongoose.Schema.Types.String
    },
    closeHours: {
      type: mongoose.Schema.Types.String
    },
    description: {
      type: mongoose.Schema.Types.String
    },
    phone: {
      type: [mongoose.Schema.Types.Number],
      required: true
    },
    location: {
      type: { type: mongoose.Schema.Types.String },
      coordinates: [mongoose.Schema.Types.Number]
    },
    images: {
      type: [mongoose.Schema.Types.String],
      required: true
    },
    category: {
      type: [mongoose.Schema.Types.String],
      required: true
    },
    ratings: {
      type: mongoose.Schema.Types.Number,
      required: true
    },
    website: {
      type: mongoose.Schema.Types.String
    },
    isOpen: {
      type: mongoose.Schema.Types.Boolean,
      default: false
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true
    }
  },
  SchemaOptions
);

hospitalSchema.index(
  { location: '2dsphere', hospitalName: 1 },
  { background: true }
);

module.exports = mongoose.model('Hospital', hospitalSchema);
