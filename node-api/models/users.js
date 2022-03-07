const mongoose = require('mongoose');
const { Schema } = mongoose;
const Validations = require('../validations');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    validate: Validations.emailRegExp
  },
  registryNumber: {
    type: String,
    require: true,
    validate: [Validations.registryNumberValidation, 'Invalid Registry Number']
  }
});

module.exports = mongoose.model('users', userSchema);