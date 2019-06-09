import { keys } from './../utils';

const createCleanProps = (dirty = []) => (props = {}) =>
	keys(props).reduce(
		(acc, prop) =>
			!dirty.includes(prop) ? { ...acc, [prop]: props[prop] } : acc,
		{},
	);

export default createCleanProps;
