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
	(isFn(parser) && parser.hasOwnProperty('propNames') && parser.propNames) ||
	[];

/**
 * List of props dependencies parsers need to derive dynamic styles.
 */
const getStyleProps = (acc, parser) => [ ...acc, ...getPropNames(parser) ];

/**
 * Dynamic styles derived from theme/state.  
 * 
 * Returns ‣
 *   1. Style map.
 *   2. Classes of the style map.
 *   3. Props that were passed sans style props.
 */
const getCss = (...parsers) => (props, opts) => {
	const cleanProps = createPropsSanitizer(getStyleProps(parsers));
	const getStyles = composeWith(merge, ...parsers);
	const options = toArr(opts) || [ 'classes', 'props', 'styles' ];
	const {
		className,
		classes,
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
		const nextStyles = merge(getStyles(currentProps), styles, css);

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
