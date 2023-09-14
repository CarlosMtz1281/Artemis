// ejecucion de import de users

import {connection} from './db.js';
import {getUsers} from './db.js';

var x = await getUsers();
console.log(x);

connection.end();