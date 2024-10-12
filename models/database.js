var mysql = require('mysql');

//mysql connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'', 
    database:'admin-panel'
});

db.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected');
});

module.exports = db;