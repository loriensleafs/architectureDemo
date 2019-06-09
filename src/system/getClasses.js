import renderStyles from './styleRenderer';
import { isObj, isStr, toArr } from './../utils';

const getClasses = (...args) => {
	if (args.length < 1) return null;

	const classes = args.reduce((acc, arg) => {
		if (isStr(arg)) {
			// Assume strings are class(es) and add to accumulator.
			return [ ...acc, ...arg.split(' ') ];
		} else if (isObj(arg)) {
			// Assume objects are styles, create classes and add to accumulator.
			return [ ...acc, ...renderStyles(arg).split(' ') ];
		}
		return acc;
	}, []);

	return classes.join(' ');
};

export default getClasses;
