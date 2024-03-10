const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'mysql',
    user     : 'cleanbrain',
    password : 'cleanbrain',
    database : 'mydb'
});
connection.connect();

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        res.send(results) 
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})