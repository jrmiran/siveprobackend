var mysql = require('mysql');

/*module.exports = function(){
    return mysql.createConnection({
        host: "belartte.mysql.uhserver.com",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte"
    });*/
    
module.exports = function(){
    return mysql.createConnection({
        host: "db4free.net",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte"
    });
}