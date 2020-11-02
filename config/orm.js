const connection = require("./connection.js")

const orm = {
    selectAll: function(table, cb) {
        let query = " SELECT * FROM ??;"
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        })
    }
}
module.exports = orm