"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errIfNotFintNum_1 = require("error-if-not-finite-number");
var isInteger_isFloat_1 = require("@writetome51/is-integer-is-float");


function errorIfNotFloat(arg) {
	errIfNotFintNum_1.errorIfNotFiniteNumber(arg);
	if (!(isInteger_isFloat_1.isFloat(arg)))  throw new Error('Input must be float.');
}
exports.errorIfNotFloat = errorIfNotFloat;
