import React from 'react';
import getCss from './getCss';
import {
	getBorders,
	getColors,
	getElevation,
	getFlexItem,
	getLayout,
	getPosition,
	getSpacing,
} from './parsers';
import { get, isObj, isStr } from './../utils';

/**
 * Base styles parser.
 */
const getStyles = props => ({
	boxSizing : 'border-box',
	minWidth  : '0px',
	...(props.inline ? { display: 'inline-block' } : null),
});
getStyles.propNames = [ 'inline' ];

/**
 * System UI styles parser.
 */
const boxCss = getCss(
	getStyles,
	getBorders,
	getColors,
	getElevation,
	getFlexItem,
	getLayout,
	getPosition,
	getSpacing,
);

export default (type, props, ...children) => {
	const cssProp = get(props, 'css');
	const styledProp = get(props, 'styled');

	if (isObj(cssProp)) {
		const { css: cssProp, classes, ...passThru } = props;
		const next = boxCss({ ...props.css, className: props.className }, [
			'classes',
			'styles',
		]);

		props = { ...passThru, className: next.classes };
	}

	return React.createElement.apply(undefined, [
		type,
		props ? props : null,
		...children,
	]);
};
