var db=require('../dbconnection'); //reference of dbconnection.js

var empleado={

getAllempleados:function(callback){

return db.query("Select * from empleado",callback);

},
getempleadoById:function(id,callback){

return db.query("select * from empleado where Id=?",[id],callback);
},
addempleado:function(empleado,callback){
return db.query("Insert into empleado values(?,?,?,?,?,?,?,?)",[empleado.Id,empleado.Nombre,empleado.RFC,empleado.puesto
    ,empleado.Direccion, empleado.nss,empleado.telefono,empleado.estatus],callback);
},
deleteempleado:function(id,callback){
 return db.query("delete from empleado where Id=?",[Id],callback);
},
updateempleado:function(id,empleado,callback){
 return db.query("update empleado set telefono=?,puesto=?,estatus=? where Id=?",[empleado.telefono,empleado.puesto,
    empleado.estatus,id],callback);
}

};
module.exports= empleado;