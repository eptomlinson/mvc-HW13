// module.exports = function(sequelize, DataTypes){
//     const Burger = sequelize.define("Burger", {
//         name: DataTypes.STRING,
//         devoured: DataTypes.BOOLEAN
//     })
//     return Burger;
// };
const orm = require("../config/orm.js");

const burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    }
}

module.exports = burgers;