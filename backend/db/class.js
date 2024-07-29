
const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({
  courseName: String,
  tutorName:String,
  duration: String,
  price: Number,
  imageUrl: String,
  education: String,
  specialization: String,
  about: String,
  videos: String,
  link:String,
  userId: String, // Store file path or reference to image
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }  // Store file path or reference to image
  });

// Create a model based on the schema
const Class = mongoose.model('Class', classSchema);
module.exports = Class;