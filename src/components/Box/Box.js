/* eslint-disable no-unused-vars */
import React, { forwardRef, useRef, useContext } from 'react';
import { ThemeContext } from './../../system';
import getCSS from './../../system/getCSS';
import {
	getBorders,
	getColors,
	getElevation,
	getFlex,
	getOpacity,
	getPositions,
	getSizing,
	getSpacing,
	getText,
} from './../../system/styles';

/**
 * Maps props to <Box> CSS.
 * @public
 */
export const css = getCSS(
	getBorders,
	getElevation,
	getFlex,
	getOpacity,
	getPositions,
	getSizing,
	getSpacing,
	getText,
	getColors,
);
css.propTypes = {
	...getBorders.propTypes,
	...getElevation.propTypes,
	...getFlex.propTypes,
	...getOpacity.propTypes,
	...getPositions.propTypes,
	...getSizing.propTypes,
	...getSpacing.propTypes,
	...getText.propTypes,
	...getColors.propTypes,
};

/**
 * @name <Box>
 * @component
 * @public
 */
const Box = forwardRef((props = {}, ref) => {
	ref = ref ? ref : useRef(null);
	const { classes, props: { as: Component, children, ...passThru } } = css(
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
	as : 'div',
};

Box.propTypes = {
	...getBorders.propTypes,
	...getColors.propTypes,
	...getElevation.propTypes,
	...getFlex.propTypes,
	...getOpacity.propTypes,
	...getPositions.propTypes,
	...getSpacing.propTypes,
	...getSizing.propTypes,
	...getText.propTypes,
};

export default Box;
