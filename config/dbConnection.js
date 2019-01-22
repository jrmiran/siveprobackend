var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: "belartte.dlinkddns.com",
        user: "belartteBd",
        password: "mdcjjh13!@",  
        database: "belartteBd"
    });
}