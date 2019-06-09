import PropTypes from 'prop-types';
import React, { forwardRef, useRef } from 'react';
import { getCss } from './../../system';
import { boxCss } from './../Box';

const getStyles = () => ({
	position                : 'relative',
	display                 : 'inline-flex',
	alignItems              : 'center',
	justifyContent          : 'center',
	// Removes the grey highlight.
	WebkitTapHighlightColor : 'transparent',
	// Reset default value
	backgroundColor         : 'transparent',
	// Disable the focus ring for mouse, touch and keyboard users.
	outline                 : 'none',
	borderTop               : 0,
	borderRight             : 0,
	borderBottom            : 0,
	borderLeft              : 0,
	borderRadius            : 0,
	// Remove the margin in Safari.
	marginTop               : '0px',
	marginRight             : '0px',
	marginBottom            : '0px',
	marginLeft              : '0px',
	// Remove the padding in Firefox.
	paddingTop              : '0px',
	paddingRight            : '0px',
	paddingBottom           : '0px',
	paddingLeft             : '0px',
	cursor                  : 'pointer',
	userSelect              : 'none',
	verticalAlign           : 'middle',
	// Reset
	'-moz-appearance'       : 'none',
	'-webkit-appearance'    : 'none',
	textDecoration          : 'none',
	// So we take precedent over the style of a native <a /> element.
	color                   : 'inherit',
	':disabled'             : {
		// Disable the link interactions.
		pointerEvents : 'none',
		cursor        : 'default',
	},
});

/**
 * Maps props to <button> CSS.
 * @private
 */
const baseButtonCss = getCss(getStyles, boxCss);

/**
 * @name <ButtonBase>
 * @component
 * @private
 */
const ButtonBase = forwardRef((props, ref) => {
	ref = ref ? ref : useRef(null);
	const {
		classes,
		props   : {
			as           : ComponentProp,
			children,
			disabled,
			onBlur,
			onFocus,
			onKeyDown,
			onKeyUp,
			onMouseDown,
			onMouseLeave,
			onMouseUp,
			onTouchEnd,
			onTouchMove,
			onTouchStart,
			tabIndex,
			type,
			...passThru
		},
	} = baseButtonCss(props);
	const Component = props.href ? 'a' : ComponentProp;

	const handleBlur = event => onBlur && onBlur(event);

	const handleFocus = event => onFocus && onFocus(event);

	const handleKeyDown = event => onKeyDown && onKeyDown(event);

	const handleKeyUp = event => onKeyUp && onKeyUp(event);

	const handleMouseDown = event => onMouseDown && onMouseDown(event);

	const handleMouseLeave = event => onMouseLeave && onMouseLeave(event);

	const handleMouseUp = event => onMouseUp && onMouseUp(event);

	const handleTouchEnd = event => onTouchEnd && onTouchEnd(event);

	const handleTouchMove = event => onTouchMove && onTouchMove(event);

	const handleTouchStart = event => onTouchStart && onTouchStart(event);

	return (
		<Component
			className={classes}
			disabled={disabled}
			onBlur={handleBlur}
			onFocus={handleFocus}
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
			onTouchStart={handleTouchStart}
			ref={ref}
			tabIndex={disabled ? '-1' : tabIndex}
			{...passThru}
		>
			{children}
		</Component>
	);
});

ButtonBase.defaultProps = {
	as       : 'button',
	tabIndex : 0,
	type     : 'button',
};

export default ButtonBase;
