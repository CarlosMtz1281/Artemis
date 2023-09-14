import mysql from 'mysql2';
 
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'artemis'
});
 

/*
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});


const user = { Username: 'Carlos24', Password: 'carlos2004', Role: 'cashier' };

connection.query('INSERT INTO users SET ?', user, (error, results) => {
  if (error) throw error;
  console.log('User inserted successfully!');
});



connection.query('SELECT * FROM users', (error, results) => {
  if (error) throw error;
  //console.log(results);
});
*/


// funcion que exporta un select
function asyncQuery(sqlQuery) {
  return new Promise((resolve, reject) => {
      connection.query(sqlQuery, function(err, result) {
           if (err) {
               reject(err);
           } else {
               resolve(result);
           }
       })
  })
}

// pt 2
async function getUsers() {
  var SelectQuery = "Select * FROM `users`";
  var users = await asyncQuery(SelectQuery);

 //console.log(users);
 return users;
}


//getUsers().then(users => console.log(users));

export {getUsers};

//connection.end();