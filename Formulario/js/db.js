let mysql = require('mysql2');

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345', 
    database: 'formulario'});

conexion.connect(function(err){
    if(err) {
        throw err;
    }
    else{
        console.log('Conexion exitosa!');
    }
});

conexion.end();
    

