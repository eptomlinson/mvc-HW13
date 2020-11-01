const router = require('./api');
const burgerRoutes = require('./routes/htmlRoutes');

const router = require('express'.Router());

const routes = require('./routes');

router.use('/api', apiRoutes);

router.use(function(req, res){
    res.render('404', {error: "no bueno"})
})
module.exports = router;