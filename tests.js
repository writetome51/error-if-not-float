"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var errorIfNotFloat = require("./index").errorIfNotFloat;


errorIfNotFloat(0.01);
console.log('test 1 passed');


let errorTriggered = false;
try {
	errorIfNotFloat('1');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


errorTriggered = false;
try {
	errorIfNotFloat(1);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


errorTriggered = false;
try {
	errorIfNotFloat('');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


errorTriggered = false;
try {
	errorIfNotFloat([]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


errorTriggered = false;
try {
	errorIfNotFloat(NaN);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');



errorTriggered = false;
try {
	errorIfNotFloat(true);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
