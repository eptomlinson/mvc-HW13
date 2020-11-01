const db = require('../models');

// html route/burger
const router = require('express').Router();

router.route('/').get(function(req, res){
    db.Burger.find({}).then(function(burgerData){
        res.render('index', {burgers: burgerData})
    })
})
// ping the db for all burgers data 
// resizeBy.render(data "burger") > generate all the html for the client 

// html to user
//      js
//          manages button clicks
//              user clicks "devour" --> ajax ('/apiburger/4') --> req
//              move element w/ id to the other side of the page
//      css