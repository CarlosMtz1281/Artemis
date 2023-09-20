// ejecucion de import de users

import {connection} from './db.js';
import {getUsers} from './db.js';
import {getProducts} from './db.js';
import {getRawMaterial} from './db.js';
import {getProcesses} from './db.js';
//import {getAccounting} from './db.js';


//ejecucuion de import de products


var usuario = await getUsers();
var producto = await getProducts();
var materiaPrima = await getRawMaterial();
var procesos = await getProcesses();
//var contabilidad = await getAccounting();


console.log(usuario);
console.log(producto);
console.log(materiaPrima);
console.log(procesos);
//console.log(contabilidad);


connection.end();