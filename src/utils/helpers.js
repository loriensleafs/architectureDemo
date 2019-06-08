import extend from 'just-extend';

/**
 * Validation methods.
 */
export const is = n => n !== undefined && n !== null;

export const isArr = n => Array.isArray(n);

export const isEq = (a, b) => a === b;

export const isFn = n => typeof n === 'function';

export const isNeg = n => n < 0;

export const isNil = n => !is(n);

export const isNum = n => typeof n === 'number';

export const isObj = n => !isNil(n) && !isArr(n) && typeof n === 'object';

export const isPartial = n => n % 1 === 0.5;

export const isStr = n => typeof n === 'string';

/**
 * Conversion Methods.
 */
export const toArr = n => (isArr(n) ? n : [ n ]);

export const toMs = milliseconds => `${Math.round(milliseconds)}ms`;

export const toPx = n => (isNum(n) ? n + 'px' : n);

export const toRem = n => (isNum(n) ? n + 'rem' : n);

export const capitalize = str =>
	isStr(str) ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const clamp = (val, min, max) => Math.min(Math.max(min, val), max);

/**
 * Getter methods.
 */
export const keys = window.keys ? window.keys : Object.keys;

export const values = window.values ? window.values : Object.values;

export const get = (obj, key = '', def, p, undef) => {
	key = key.split ? key.split('.') : [ key ];
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
};

export const merge = (...args) => extend.call(true, ...args);

/**
 * Misc methods.
 */
export const noop = n => n;
