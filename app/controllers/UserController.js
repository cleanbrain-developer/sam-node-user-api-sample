const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'cleanbrain',
  password: 'cleanbrain',
  database: 'mydb',
})
connection.connect()

exports.getAllUsers = async (req, res) => {
  try {
    connection.query('SELECT * FROM user', function (error, results, fields) {
      if (error) {
        throw error
      }
      res.json(results)
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
