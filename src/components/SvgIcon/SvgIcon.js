import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import Box from './../Box';
import { getCss } from './../../system';
import { fade } from './../../utils/colorHelpers';

const pxToRem = (size = 16) => `${size / 16}rem`;

const isBrandColor = color =>
	color && [ 'primary', 'secondary', 'tertiary' ].includes(color);

const getColorStyles = ({ color, disabled, theme: { colors } }) => {
	if (disabled) {
		return {
			color : colors.action.disabled,
		};
	} else if (color === 'action') {
		return {
			color : colors.action.active,
		};
	} else if (isBrandColor(color)) {
		return {
			color : colors[color].main,
		};
	}
	return {
		color : 'inherit',
	};
};
getColorStyles.propNames = [ 'color', 'disabled' ];

const getSizeStyles = ({ size }) => {
	switch (size) {
		case 'small':
			return {
				fontSize : pxToRem(20),
			};

		case 'large':
			return {
				fontSize : pxToRem(50),
			};

		case 'inherit':
			return {
				fontSize : 'inherit',
			};

		default:
			return {
				fontSize : pxToRem(24),
			};
	}
};
getSizeStyles.propNames = [ 'fullWidth', 'size' ];

const getStyles = (props = {}) => ({
	userSelect : 'none',
	width      : '1em',
	height     : '1em',
	display    : 'inline-block',
	fill       : 'currentColor',
	flexShrink : 0,
});

/**
 * Maps props to <svg> CSS.
 * @private
 */
const svgIconCss = getCss(getStyles, getSizeStyles, getColorStyles);

/**
 * @name <SvgIcon>
 * @component
 * @public
 */
const SvgIcon = forwardRef((props = {}, ref) => {
	const {
		props  : {
			as          : Component,
			children,
			color,
			fontSize,
			htmlColor,
			titleAccess,
			viewBox,
			...passThru
		},
		styles,
	} = svgIconCss(props);

	return (
		<Box
			as={Component}
			styles={styles}
			focusable='false'
			viewBox={viewBox}
			color={htmlColor}
			aria-hidden={titleAccess ? 'false' : 'true'}
			role={titleAccess ? 'img' : 'presentation'}
			ref={ref}
			{...passThru}
		>
			{children}
			{titleAccess ? <title>{titleAccess}</title> : null}
		</Box>
	);
});

SvgIcon.displayName = 'SvgIcon';

SvgIcon.defaultProps = {
	as      : 'svg',
	color   : 'inherit',
	viewBox : '0 0 24 24',
};

export default SvgIcon;
