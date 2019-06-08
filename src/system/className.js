import { Client } from 'styletron-engine-atomic';
import { isObj, isStr } from './../utils';

export const engine = window.styletronClient || new Client();

const className = (...args) =>
	args.length < 1
		? null
		: args
				.reduce((acc, arg) => {
					if (isStr(arg)) {
						return [ ...acc, arg ];
					} else if (isObj(arg)) {
						return [ ...acc, ...engine.renderStyle(arg).split(' ') ];
					} else {
						return acc;
					}
				}, [])
				.join(' ');

export default className;
