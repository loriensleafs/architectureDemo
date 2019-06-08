import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import BaseButton from './../ButtonBase';
import getCSS from './../../system/getCSS';
import { boxCss } from './../Box';
import { fade } from './../../utils/colorHelpers';

const isBrandColor = color =>
	color && [ 'primary', 'secondary', 'tertiary' ].includes(color);

const getSelectedStyles = ({ color, selected, theme: { palette }, variant }) =>
	selected && {
		backgroundColor :
			variant === 'contained'
				? palette[color].dark
				: fade(palette[color].dark, palette.action.hoverOpacity),
	};
getSelectedStyles.propTypes = {
	selected : PropTypes.bool,
};

const getSizeStyles = ({ fullWidth, size }) => {
	switch (size) {
		case 'small':
			return boxCss(
				{
					w          : fullWidth ? 1 : null,
					wMin       : '64px',
					hMin       : '31px',
					py         : 1,
					px         : 2,
					typography : 'button',
				},
				'styles',
			);

		case 'large':
			return boxCss(
				{
					w          : fullWidth ? 1 : null,
					hMin       : '42px',
					py         : 2,
					px         : 3.5,
					typography : 'button',
				},
				'styles',
			);

		default:
			return boxCss(
				{
					w          : fullWidth ? 1 : null,
					wMin       : '64px',
					hMin       : '36px',
					py         : 2,
					px         : 3,
					typography : 'button',
				},
				'styles',
			);
	}
};
getSizeStyles.propTypes = {
	fullWidth : PropTypes.bool,
	size      : PropTypes.bool,
};

const getVariantStyles = ({ color, variant, theme, ...props }) => {
	const { palette } = theme;
	const brandColor = isBrandColor(color);
	const colorCode = brandColor ? palette[color].main : palette.text.primary;

	switch (variant) {
		case 'outlined':
			return {
				color           : colorCode,
				backgroundColor : 'transparent',
				border          : `1px solid ${colorCode}`,
				':hover'        : {
					backgroundColor : fade(
						colorCode,
						palette.action.hoverOpacity,
					),
				},
			};

		case 'contained':
			return {
				color           : brandColor
					? palette[color].contrastText
					: palette.text.primary,
				backgroundColor : colorCode,
				':hover'        : {
					backgroundColor : palette[color].dark,
				},
			};

		default:
			return {
				color           : colorCode,
				backgroundColor : 'transparent',
				':hover'        : {
					backgroundColor : fade(
						colorCode,
						palette.action.hoverOpacity,
					),
				},
			};
	}
};
getVariantStyles.propTypes = {
	color    : PropTypes.oneOf([ 'primary', 'secondary', 'tertiary' ]),
	disabled : PropTypes.bool,
	variant  : PropTypes.oneOf([ 'text', 'outlined', 'contained' ]),
};

const getButtonStyles = ({ theme }) => ({
	boxSizing    : 'border-box',
	whiteSpace   : 'nowrap',
	borderRadius : theme.shape.borderRadius.round,
});

/**
 * Maps props to <Button> CSS.
 * @private
 */
const buttonCss = getCSS(
	getButtonStyles,
	getVariantStyles,
	getSizeStyles,
	getSelectedStyles,
);

/**
 * Maps props to <label> CSS.
 * @private
 */
const labelCss = getCSS(() => ({
	display        : 'inherit',
	width          : '100%',
	alignItems     : 'inherit',
	justifyContent : 'inherit',
}));

/**
 * @name <Button>
 * @component
 * @public
 */
const Button = forwardRef((props = {}, ref) => {
	ref = ref ? ref : useRef(null);
	const {
		props  : { children, ...passThru },
		styles : buttonStyles,
	} = buttonCss(props);

	return (
		<BaseButton ref={ref} styles={buttonStyles} {...passThru}>
			<span className={labelCss(props, 'classes')}>{children}</span>
		</BaseButton>
	);
});

Button.displayName = 'Button';

Button.defaultProps = {
	as        : 'button',
	color     : 'primary',
	disabled  : false,
	fullWidth : false,
	type      : 'button',
	variant   : 'text',
};

export default Button;
