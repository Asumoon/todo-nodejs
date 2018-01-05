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

// Delete single Article
router.delete('/delete/:id', (req, res, next) => {
    let query = {_id:req.params.id};
    ToDoApp.remove(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success');
    });
});

// Homepage Route 
router.get('/', (req, res, next) => {
     res.render('home',{
        allListKo: ToDoApp.find({}).sort({_id:-1}).limit(20)
    });
})

// Display Single Article
router.get('/edit/todo/:_idname', (req, res, next) => {
   var name = req.params._idname;
   console.log(name)
     res.render('edit',{
        editSingle: ToDoApp.findOne({"_id":name})
     });
})

// update single article 
router.post('/edit/todo/:_id', (req, res, next) => {  
    let todoApp = {};
    todoApp.name = req.body.name;
    todoApp.title = req.body.title;
    todoApp.body = req.body.body;
   
    let query = {_id:req.params._id}
    ToDoApp.update(query, todoApp, function(err) {
        if(err){
            res.send('failde to register');
        } else {
            res.redirect('/');
        }
    })
})

module.exports = router;