const router = require('express').Router();
const burgerRoutes = require('./burgers');

router.use('/burgers', burgerRoutes);

router.use(function(req, res){
    res.json({error: "Yo, you lost man? You ain't from here."})
});