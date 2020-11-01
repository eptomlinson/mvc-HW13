const apiRoutes = require('./api');
const db = require('../models');
const router = require('express').Router();
// const burgerRoutes = require('./burgers');

router.use('/api', apiRoutes);

router.route('/').get(function (req, res) {
    db.Burger.findAll({}).then(function (burgerData) {
        res.render('index', { burgers: burgerData })
    })
});

router.use(function (req, res) {
    res.render('404', { error: 'Yo, you lost man' })
});

module.exports = router;