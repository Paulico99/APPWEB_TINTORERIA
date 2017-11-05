var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'paulico99',
database:'bd_tintoreria'

});
module.exports=connection;