/* eslint-disable */
const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'mydb'
});
 

/*
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});*/


const user = { name: 'John Doe', email: 'john.doe@example.com' };

connection.query('INSERT INTO users SET ?', user, (error, results) => {
  if (error) throw error;
  console.log('User inserted successfully!');
});