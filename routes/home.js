const express = require('express');
const router = express.Router();
const config = require('../config/database'); // Models for Database connection
const ToDoApp = require('../models/test'); 

router.post('/new-todo', (req, res, next) => {
    let todoApp = new ToDoApp()
    todoApp.name = req.body.name;
    todoApp.title = req.body.title;
    todoApp.body = req.body.body;
   
    todoApp.save(function(err) {
        if(err){
            res.send('failde to register');
        } else {
            res.redirect('/');
        }
    })
})

router.delete('/:_id', (req, res, next) => {
    var _id = req.param._id;
    res.redirect('/');
})

router.get('/', (req, res, next) => {
     res.render('home',{
        allListKo: ToDoApp.find({}).sort({_id:-1}).limit(20)
    });
})

router.get('/edit/todo/:_id', (req, res, next) => {
    var _id = req.params._id;
     res.render('edit');
})

router.put('/new-todo/:_id', (req, res, next) => {
    res.render('home');
})

module.exports = router;