import { isFn, isObj, merge } from './helpers';

const reduce = (reducers, props) =>
	reducers.reduce(
		(acc, reducer) =>
			isFn(reducer)
				? merge(acc, reducer(props))
				: isObj(reducer) ? merge(acc, reducer) : acc,
		{},
	);

const combine = (...reducers) => arg =>
	isFn(arg) ? arg(reducers) : reduce(reducers, arg);

export default combine;
