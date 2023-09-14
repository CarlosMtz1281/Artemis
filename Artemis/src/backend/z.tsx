// Prueba de import a typescript

import {connection} from './db.js';
import {getUsers} from './db.js';

const x = await getUsers();
console.log(x);

connection.end();