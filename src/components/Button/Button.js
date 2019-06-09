import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import BaseButton from './../ButtonBase';
import { boxCss } from './../Box';
import { getCss } from './../../system';
import { fade } from './../../utils/colorHelpers';

const isBrandColor = color =>
	color && [ 'primary', 'secondary', 'tertiary' ].includes(color);

/**
* <Button> selected API style parser.
*/
const getSelectedStyles = ({ color, selected, theme: { colors }, variant }) =>
	selected && {
		backgroundColor :
			variant === 'contained'
				? colors[color].dark
				: fade(colors[color].dark, colors.action.hoverOpacity),
	};
getSelectedStyles.propNames = [ 'selected' ];

/**
 * <Button> size API style parser.
 */
const getSizeStyles = ({ fullWidth, size }) => {
	switch (size) {
		case 'small':
			return boxCss(
				{
					w    : fullWidth ? 1 : null,
					wMin : '64px',
					hMin : '31px',
					py   : 1,
					px   : 2,
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
getSizeStyles.propNames = [ 'fullWidth', 'size' ];

/**
 * <Button> variant API style parser.
 */
const getVariantStyles = ({ color, variant, theme, ...props }) => {
	const { colors } = theme;
	const brandColor = isBrandColor(color);
	const colorCode = brandColor ? colors[color].main : colors.text.primary;

	switch (variant) {
		case 'outlined':
			return {
				color           : colorCode,
				backgroundColor : 'transparent',
				border          : `1px solid ${colorCode}`,
				':hover'        : {
					backgroundColor : fade(
						colorCode,
						colors.action.hoverOpacity,
					),
				},
			};

		case 'contained':
			return {
				color           : brandColor
					? colors[color].contrastText
					: colors.text.primary,
				backgroundColor : colorCode,
				':hover'        : {
					backgroundColor : colors[color].dark,
				},
			};

		default:
			return {
				color           : colorCode,
				backgroundColor : 'transparent',
				':hover'        : {
					backgroundColor : fade(
						colorCode,
						colors.action.hoverOpacity,
					),
				},
			};
	}
};
getVariantStyles.propNames = [ 'color', 'disabled', 'variant' ];

/**
 * Base <Button> styles parser.
 */
const getButtonStyles = ({ theme }) => ({
	boxSizing    : 'border-box',
	whiteSpace   : 'nowrap',
	borderRadius : theme.shape.borderRadius.round,
});

/**
 * <Button> style parsers.
 */
const buttonCss = getCss(
	getButtonStyles,
	getVariantStyles,
	getSizeStyles,
	getSelectedStyles,
	boxCss,
);

/**
 * Base <label> style parser.
 */
const labelCss = getCss(() => ({
	display        : 'inherit',
	width          : '100%',
	alignItems     : 'inherit',
	justifyContent : 'inherit',
}));

/**
 * Styled <Button> component.
 */
const Button = forwardRef((props = {}, ref) => {
	ref = ref ? ref : useRef(null);
	const {
		props  : { children, color, variant, ...passThru },
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
