const db = require('../models');

module.exports = {
    smashAllBurgs: function(req, res){
        db.Burger.find({}).then(function(dbBurgerData) {res.json(dbBurgerData)})
    },
    smashSpecificBurger: function(req, res) {
        db.Burger.find({id}).then(function(dbBurgerData){res.json(dbBurgerData)})
    },
    addBurger: function(req, res){

    },
    delBurger: function(req, res){

    },
    updBurger: function(req, res){

    },
};

// all burgers
// get burger by id?
// add burger
// delete burger
// update burger