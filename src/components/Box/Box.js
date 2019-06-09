/* eslint-disable no-unused-vars */
import React, { forwardRef, useRef, useContext } from 'react';
import {
	getCss,
	getBorders,
	getColors,
	getElevation,
	getFlexItem,
	getLayout,
	getPosition,
	getSpacing,
	getTypography,
	ThemeContext,
} from '../../system';

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
export const boxCss = getCss(
	getStyles,
	getBorders,
	getColors,
	getElevation,
	getFlexItem,
	getLayout,
	getPosition,
	getSpacing,
	getTypography,
);

/**
 * System UI component.
 */
const Box = forwardRef((props = {}, ref) => {
	const { classes, props: { as: Component, children, ...passThru } } = boxCss(
		props,
	);

	return (
		<Component className={classes} ref={ref} {...passThru}>
			{children}
		</Component>
	);
});

Box.displayName = 'Box';

Box.defaultProps = {
	as     : 'div',
	inline : false,
};

export default Box;
