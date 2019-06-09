import { isFn, isObj, merge } from './helpers';

const composeWith = (combine = merge, ...reducers) => n =>
	reducers.reduce(
		(acc, reducer) =>
			combine(
				acc,
				isFn(reducer) ? reducer(n) : isObj(reducer) ? reducer : {},
			),
		{},
	);

export default composeWith;
