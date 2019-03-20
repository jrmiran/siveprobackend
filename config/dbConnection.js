var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: "belartte.mysql.uhserver.com",
        user: "belartteBd",
        password: "mdcjjh13!@",  
        database: "belartteBd"
    });
}