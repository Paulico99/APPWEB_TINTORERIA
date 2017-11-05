var db=require('../dbconnection'); //reference of dbconnection.js

var Cliente={

getAllClientes:function(callback){

return db.query("Select * from cliente",callback);

},
getClienteById:function(id,callback){

return db.query("select * from cliente where Id=?",[id],callback);
},
addCliente:function(Cliente,callback){
return db.query("Insert into cliente values(?,?,?,?,?,?,?,?,?,?)",[Cliente.Id,Cliente.Nombre,Cliente.Apellidos,Cliente.Direccion,
    Cliente.Telefono,Cliente.correo,Cliente.contrasena,Cliente.recontrasena,Cliente.tipo_persona,Cliente.estatus],callback);
},
deleteCliente:function(id,callback){
 return db.query("delete from cliente where Id=?",[Id],callback);
},
updateCliente:function(id,Cliente,callback){
 return db.query("update Cliente set telefono=?,contrasena=?,recontrasena=?,estatus=? where Id=?",[Cliente.telefono,Cliente.contrasena,
    Cliente.recontrasena,Cliente.estatus,id],callback);
}

};
module.exports= Cliente;