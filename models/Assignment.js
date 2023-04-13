const mongoose = require('mongoose')

const AssignmentSchema = mongoose.Schema({
    className:{
      type: String,
        required: true,
    },
    sem:{
      type: Number,
        required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    topic: {
        type:String,
        required: true,
    },
    viewLink: {
      type: String,
      required: true,
    },
    downloadLink: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model('assignment', AssignmentSchema);
  