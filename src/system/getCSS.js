import theme from './theme';
import getClasses from './getClasses';
import createPropsSanitizer from './cleanProps';
import {
	composeWith,
	keys,
	isArr,
	isFn,
	isNil,
	isObj,
	merge,
	toArr,
} from './../utils';

/**
 * List of props dependencies a single parser needs to derive dynamic styles.
 */
const getPropNames = parser =>
	isFn(parser) && parser.hasOwnProperty('propNames') ? parser.propNames : [];

/**
 * List of props dependencies parsers need to derive dynamic styles.
 */
const getStyleKeys = (acc, parser) => {
	const keys = [ ...acc, ...getPropNames(parser) ];
	return keys;
};

const getStyleProps = (keys, props) =>
	keys.reduce(
		(acc, key) => (props[key] ? { ...acc, [key]: props[key] } : acc),
		{},
	);

/**
 * Dynamic styles derived from theme/state.  
 * 
 * Returns ‣
 *   1. Style map.
 *   2. Classes of the style map.
 *   3. Props that were passed sans style props.
 */
const getCss = (...parsers) => (
	props,
	opts = [ 'classes', 'props', 'styles' ],
) => {
	const styleKeys = parsers.reduce(getStyleKeys, []);
	const cleanProps = createPropsSanitizer(styleKeys);
	const getStyles = composeWith(merge, ...parsers);
	const options = toArr(opts);
	const {
		className = '',
		classes = '',
		css = {},
		styles = {},
		...currentProps
	} = props;
	const next = {};

	/** 
     * Remove all style props. 
     */
	if (options.includes('props')) {
		next.props = cleanProps(currentProps);
	}

	/** 
     * Map props to styles and get classes. 
     */
	if (options.includes('classes') || options.includes('styles')) {
		const styleProps = { ...getStyleProps(styleKeys, currentProps), theme };
		const nextStyles = merge(getStyles(styleProps), styles, css);

		if (options.includes('styles')) {
			next.styles = nextStyles;
		}

		if (options.includes('classes')) {
			next.classes = isObj(nextStyles)
				? getClasses(nextStyles, classes, className)
				: '';
		}
	}

	return options.length === 1 ? next[options[0]] : next;
};

export default getCss;
