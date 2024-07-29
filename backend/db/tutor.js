// Tutor.js

const mongoose = require('mongoose');

// Define Tutor schema
const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  education: String,
  specialization: String,
  about: String,
  videos: String,
  userId:String
});

// Create Tutor model
const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;
