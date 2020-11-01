// dependencies
const express = require('express');
const { delBurger } = require('./controllers/burgersControllers');
const app= express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "handlebars");

app.use(apiRoutes);

delBurger.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        log("Server listening on http:")
    });
});