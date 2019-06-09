import { isFn, isObj, merge } from './helpers';

const composeWith = (combine = merge, ...reducers) => n => {
	const vals = reducers.reduce((acc, reducer) => {
		const parsed = isFn(reducer)
			? reducer(n)
			: isObj(reducer) ? reducer : {};

		if (isObj(parsed)) {
			const val = combine(
				acc,
				isFn(reducer) ? reducer(n) : isObj(reducer) ? reducer : {},
			);
			return val;
		}
		return acc;
	}, {});

	return vals;
};

export default composeWith;
