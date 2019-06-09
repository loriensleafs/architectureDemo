import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import BaseButton from './../ButtonBase';
import { getCss } from './../../system';
import { boxCss } from './../Box';
import { fade } from './../../utils/colorHelpers';

const getAbsoluteStyles = ({ absolute }) =>
	absolute && {
		position : 'absolute',
		bottom   : '0px',
		left     : '0px',
		width    : '100%',
	};

const getVariantStyles = ({ variant }) => {
	switch (variant) {
		case 'inset':
			return {
				marginLeft : '72px',
			};

		case 'middle':
			return boxCss(
				{
					mx : 2,
				},
				'styles',
			);

		default:
			return {
				margin : '0px',
			};
	}
};

const getLightStyles = ({ light, theme: { colors } }) =>
	light && {
		backgroundColor : fade(colors.divider, 0.08),
	};

const getStyles = ({ theme: { colors } }) => ({
	height          : '1px',
	margin          : 0, // Reset browser default style.
	border          : 'none',
	flexShrink      : 0,
	backgroundColor : colors.divider,
});

/**
 * Maps props to <Divider> CSS.
 * @private
 */
const dividerCss = getCss(getStyles, getLightStyles, getVariantStyles);
dividerCss.propTypes = {
	/** Absolutely position the element. */
	absolute : PropTypes.bool,
	/** If `true`, the divider will have a lighter color. */
	light    : PropTypes.bool,
	/** The variant to use. */
	variant  : PropTypes.oneOf([ 'fullWidth', 'inset', 'middle' ]),
};

/**
 * @name <Divider>
 * @component
 * @public
 */
const Divider = forwardRef((props = {}, ref) => {
	const { classes, props: { as: Component, ...passThru } } = dividerCss(
		props,
	);

	return <Component className={classes} ref={ref} {...passThru} />;
});

Divider.displayName = 'Divider';

Divider.defaultProps = {
	absolute : false,
	as       : 'hr',
	light    : false,
	variant  : 'fullWidth',
};

export default Divider;
