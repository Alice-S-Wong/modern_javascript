/* global moment */

var moment = require('moment');

console.log("Let's a go");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

let x;           // let does not hoist the variable
x = 10;
console.log(x);
