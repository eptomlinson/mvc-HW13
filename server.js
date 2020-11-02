// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection =mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'burger_db'
    });
};

const db = require('./models');

const routes = require('./models');

const app= express();

const PORT = process.env.PORT || 8080;

const { delBurger } = require('./controllers/burgersControllers');

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        log("Server listening on http://localhost:" + PORT);
    });
});