var dbConnection = require('../../config/dbConnection');


module.exports = function(app, vendor){
    var con = dbConnection();
    
    app.get(`/${vendor}/:nameEmpresa`, function(req, res){  
        console.log(req.params.nameEmpresa)
        let sql = `Select Vendedor.nome from Vendedor, Cliente where Vendedor.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
}