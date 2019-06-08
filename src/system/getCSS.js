import theme from './theme';
import cn from './className';
import { keys, isArr, isFn, isNil, isObj, merge, toArr } from './../utils';

/**
 * Gets the list of props that need to be parsed/mapped to styles.
 * 
 * @param  {Array} 		acc 	Accumulated style prop keys.
 * @param  {Function} 	reducer Current reducer to get prop deps from.
 * @return {Array} 		Valid style props.
 */
const getCssProps = (acc, reducer) =>
	reducer &&
	(reducer.hasOwnProperty('propTypes') || reducer.hasOwnProperty('propNames'))
		? [
				...acc,
				...(reducer.hasOwnProperty('propTypes')
					? keys(reducer.propTypes)
					: reducer.propNames),
			]
		: acc;

/**
 * Removes all style specific props from component props object.
 * 
 * @param  {type} styleProps {description}
 * @param  {type} props      {description}
 * @return {type} {description}
 */
const getNextProps = (styleProps, props) => (acc, prop) => {
	return !styleProps.includes(prop) ? { ...acc, [prop]: props[prop] } : acc;
};

/**
 * Map the component props to styles.
 * 
 * @param  {Object} 	acc     {description}
 * @param  {Function} 	reducer {description}
 * @return {Function} 	{description}
 */
const getNextStyles = props => (acc, reducer) => {
	return isFn(reducer)
		? merge(acc, reducer(props))
		: isObj(reducer) ? merge(acc, reducer) : acc;
};

/**
 * Creates a map props to CSS function.  The function takes two
 * arguments.  
 * 
 * @function getCSS
 * @param  {Array}  	reducers Functions that map props to styles.
 * @return {Function} 	The mapPropsToCSS() method.
 *
 * @function mapPropsToCSS
 * @param {Object} 			props Component props.
 * @param {Array|String} 	[include=['className', 'props', 'styles']] What the
 * map props to CSS function should parse/return.
 *
 * 1. 'styles'		‣ Include mapped props to styles.
 * 2. 'props' 		‣ Include props with style specific props removed.
 * 3. 'className'	‣ Include the classes for the parsed styles.
 */
const getCSS = (...reducers) => (
	{ className, classes, css = {}, styled, styles = {}, ...props },
	include = [ 'classes', 'props', 'styles' ],
) => {
	const next = {};
	const includeNext = toArr(include);
	const includeNextClasses = includeNext.includes('classes');
	const includeNextProps = includeNext.includes('props');
	const includeNextStyles = includeNext.includes('styles');
	const cssProps = reducers.reduce(getCssProps, []);

	if (includeNextProps) {
		next.props = keys(props).reduce(getNextProps(cssProps, props), {});
	}

	if (includeNextStyles || includeNextClasses) {
		const nextStyles = merge(
			reducers.reduce(getNextStyles({ ...props, theme }), {}),
			styles,
			css,
		);
		const nextClasses = isObj(nextStyles) ? cn(nextStyles) : '';

		if (includeNextStyles) {
			next.styles = nextStyles;
		}

		if (includeNextClasses) {
			next.classes = `${nextClasses}${classes
				? ` ${classes}`
				: ''}${className ? ` ${className}` : ''}`;
		}
	}

	return includeNext.length === 1 ? next[include] : next;
};

export default getCSS;
