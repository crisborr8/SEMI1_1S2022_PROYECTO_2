const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'faunadex-p2.ciojpza4esma.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'uno2tres4',
    database: 'PROYECTO',
    multipleStatements: true
})

module.exports = db