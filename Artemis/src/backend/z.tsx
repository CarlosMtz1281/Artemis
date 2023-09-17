// Prueba de import a typescript

import {connection} from './db.js';
import {getUsers} from './db.js';
import {getProducts} from './db.js';
import {getRawMaterial} from './db.js';
import {getProcesses} from './db.js';

const connections = await getUsers();
const user = await getProducts();
const product = await getProducts();
const process = await getProcesses();
const rawMaterials = await getRawMaterial();



console.log(connections);
console.log(user);
console.log(product);
console.log(rawMaterials);
console.log(process);



connection.end();