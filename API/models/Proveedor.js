var db=require('../dbconnection'); //reference of dbconnection.js

var proveedor={

getAllproveedores:function(callback){

return db.query("Select * from proveedor",callback);

},
getproveedorById:function(id,callback){

return db.query("select * from proveedor where Id=?",[id],callback);
},
addproveedor:function(proveedor,callback){
return db.query("Insert into proveedor values(?,?,?,?,?,?,?,?,?)",[proveedor.Id,proveedor.Nombre,proveedor.RFC,proveedor.Direccion,
    proveedor.Telefono,proveedor.correo,proveedor.localidad,proveedor.estado,proveedor.estatus],callback);
},
deleteproveedor:function(id,callback){
 return db.query("delete from proveedor where Id=?",[Id],callback);
},
updateproveedor:function(id,proveedor,callback){
 return db.query("update proveedor set telefono=?,correo=?,estatus=? where Id=?",[proveedor.telefono,proveedor.correo,
    proveedor.estatus,id],callback);
}

};
module.exports= proveedor;