const mongoose = require('mongoose');
const config = require('../config/database');

// test Schema
const todoSchema = mongoose.Schema({
    name:{
      type: String,
    } ,
    title:{
      type: String,
    } ,
    body:{
      type: String,
    }  
});

const ToDoApp = module.exports = mongoose.model('ToDoApp', todoSchema);
