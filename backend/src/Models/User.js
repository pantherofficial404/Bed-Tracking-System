const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    password: {
      type: mongoose.Schema.Types.String,
      require: true
    }
  },
  SchemaOptions
);

userSchema.index({ userSchema: 1 });

module.exports = mongoose.model('User', userSchema);
