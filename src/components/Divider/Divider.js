import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import BaseButton from './../ButtonBase';
import getCSS from './../../system/getCSS';
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

const getLightStyles = ({ light, theme: { palette } }) =>
	light && {
		backgroundColor : fade(palette.divider, 0.08),
	};

const getStyles = ({ theme: { palette } }) => ({
	height          : '1px',
	margin          : 0, // Reset browser default style.
	border          : 'none',
	flexShrink      : 0,
	backgroundColor : palette.divider,
});

/**
 * Maps props to <Divider> CSS.
 * @private
 */
const css = getCSS(getStyles, getLightStyles, getVariantStyles);
css.propTypes = {
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
	const { className, props: { as: Component, ...passThru } } = css(props);

	return <Component className={className} ref={ref} {...passThru} />;
});

Divider.displayName = 'Divider';

Divider.defaultProps = {
	absolute : false,
	as       : 'hr',
	light    : false,
	variant  : 'fullWidth',
};

export default Divider;
