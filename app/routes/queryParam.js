var dbConnection = require('../../config/dbConnection');


module.exports = function(app){
    var con = dbConnection();
    
    app.get("/clientsEmpresa2/:nameEmpresa", function(req, res){  
        console.log(req.params.nameEmpresa)
        con.query("Select ClienteEmpresa.nome from ClienteEmpresa, Cliente where ClienteEmpresa.empresa_id = Cliente.id and Cliente.nome = " + req.params.nameEmpresa, function(err, result){
            res.send(result);
        });
    });
    
}