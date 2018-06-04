var mysql = require('mysql');
module.exports = function ()
{
    return createDBConnection;
}


function createDBConnection()
{
    return mysql.createConnection({
        host: 'localhost',
        user:  'root',
        password: 'root',
        database: 'casadocodigo_nodejs'
    });
}