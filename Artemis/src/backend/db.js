import mysql from 'mysql2';
 
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'artemis'
});
 
//******************** USERS ********************
//Prueba de usuarios


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

//funciones para exportar los selects de la base de datos 

async function getUsers() {
  var SelectQuery = "Select * FROM `users`";
  var users = await asyncQuery(SelectQuery);

 //console.log(users);
 return users;
}

//******************** PRODUCTS ********************

//Prueba de productos 

const product={UserId: 1,Price:50.40,Qty:1};

connection.query('INSERT INTO products SET ?', product, (error, results) => {
  if (error) throw error;
  console.log('Product inserted successfully!');
});

connection.query('SELECT * FROM products', (error, results) => {
  if (error) throw error;
  console.log(results);
});


async function getProducts() {
  var SelectQuery = "Select * FROM `products`";
  var products = await asyncQuery(SelectQuery);

  
 return products;
}

//******************** Raw material  ********************

//Prueba de materia prima

const rawmaterial={Qty:5 ,ReOrderQty:1 ,Price:150 ,Units:"Eggs"};

connection.query('INSERT INTO rawmaterial SET ?', rawmaterial, (error, results) => {
  if (error) throw error;
  console.log('Raw material inserted successfully!');
});

connection.query('SELECT * FROM rawmaterial', (error, results) => {
  if (error) throw error;
  console.log(results);
});

async function getRawMaterial() {
  var SelectQuery = "Select * FROM `rawmaterial`";
  var rawmaterial = await asyncQuery(SelectQuery);

  
 return rawmaterial;
}


//******************** processes ********************

const process={ProductId:1,RmId:1,Qty:1};

connection.query('INSERT INTO processes SET ?', process, (error, results) => {
  if (error) throw error;
  console.log('Process inserted successfully!');
});

connection.query('SELECT * FROM processes', (error, results) => {
  if (error) throw error;
  console.log(results);
});

async function getProcesses() {
  var SelectQuery = "Select * FROM `processes`";
  var processes = await asyncQuery(SelectQuery);

 return processes;
}


//******************** Accounting (error en el constraint ) ********************
//Prueba de contabilidad

/*

const accounting={amount:500};

connection.query('INSERT INTO accounting SET ?', accounting, (error, results) => {
  if (error) throw error;
  console.log('Accounting inserted successfully!');
});

connection.query('SELECT * FROM accounting', (error, results) => {
  if (error) throw error;
  console.log(results);
});

async function getAccounting() {
  var SelectQuery = "Select * FROM `accounting`";
  var accounting = await asyncQuery(SelectQuery);

  // console.log(accounting);
 return accounting;
}


*/

//******************** EXPORTS ********************
getUsers().then(users => console.log(users));
getProducts().then(products => console.log(products));
getRawMaterial().then(rawmaterial => console.log(rawmaterial));
getProcesses().then(processes => console.log(processes));
//getAccounting().then(accounting => console.log(accounting));

// getUsers().then(users => console.log(users));

export {getUsers};
export {getProducts};
export {getRawMaterial};
export {getProcesses};
//export {getAccounting};


//connection.end();