var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: "belartte.mysql.uhserver.com",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte"
    });
}