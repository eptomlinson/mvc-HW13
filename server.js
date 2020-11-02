// dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./models');

const routes = require('./routes/htmlRoutes');

const app= express();

const PORT = process.env.PORT || 8080;

// const { delBurger } = require('./controllers/burgersControllers');

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on http://localhost:" + PORT);
    });
// });