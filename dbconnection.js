var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 33060,
  user: 'homestead',
  password: 'secret',
  database: 'homestead'
});
connection.connect(function(err){
    // console.log(err);
    if (err) throw err;
    // console.log('Connected');
})

exports.DbConnection=connection;