import React from 'react';
import getCSS from './../../system/getCSS';
import { isNum, toPx } from './../../utils';

const COLOR_PROPS = [ 'primary', 'secondary', 'tertiary' ];

const getColorStyles = ({ color = 'primary', theme }) => ({
	stroke : COLOR_PROPS.includes(color)
		? theme.palette[color].main
		: 'currentColor',
});

const getThicknessStyles = ({ thickness }) => ({
	strokeWidth : isNum(thickness) ? thickness : 4,
});

const getSizeStyles = ({ size = 40 }) => ({
	height : toPx(size),
	width  : toPx(size),
});

const getSvgStyles = (props = {}) => ({
	animationName           : {
		'0%'   : { transform: 'rotate(-110deg)' },
		'20%'  : { transform: 'rotate(-70deg)' },
		'60%'  : { transform: 'rotate(-90deg)' },
		'100%' : { transform: 'rotate(-250deg)' },
	},
	animationDuration       : '1.5s',
	animationIterationCount : 'infinite',
	animationTimingFunction : 'linear',
});

const getCircleStyles = (props = {}) => ({
	fill                    : 'none',
	strokeLinecap           : 'round',
	animationName           : {
		'0%'   : {
			strokeDasharray  : '1, 150',
			strokeDashoffset : 0,
		},
		'20%'  : {
			strokeDasharray  : '1, 150',
			strokeDashoffset : 0,
		},
		'60%'  : {
			strokeDasharray  : '90, 150',
			strokeDashoffset : -35,
		},
		'100%' : {
			strokeDasharray  : '90, 150',
			strokeDashoffset : -124,
		},
	},
	animationDuration       : '1.5s',
	animationIterationCount : 'infinite',
	animationTimingFunction : 'cubic-bezier(0.4, 0.0, 0.2, 1)',
});

/**
 * Maps props to <svg> CSS.
 * @private
 */
const svgCss = getCSS(getSvgStyles, getSizeStyles);

/**
 * Maps props to <circle> CSS.
 * @private
 */
const circleCss = getCSS(getCircleStyles, getColorStyles, getThicknessStyles);

/**
 * @name <Progress>
 * @component
 * @public
 */
const Progress = (props = {}) => (
	<svg className={svgCss(props, 'className')} viewBox='0 0 50 50'>
		<circle
			className={circleCss(props, 'className')}
			cx='25'
			cy='25'
			r='20'
		/>
	</svg>
);

Progress.displayName = 'Progress';

export default Progress;
