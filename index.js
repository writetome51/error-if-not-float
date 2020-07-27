import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {isFloat} from '@writetome51/is-integer-is-float';


export function errorIfNotFloat(arg) {
	errorIfNotFiniteNumber(arg);
	if (!(isFloat(arg))) throw new Error('Input must be float.');
}
