import { system } from '@styled-system/core';
import { isNeg, isNum, isPartial, get, toPx } from './../../utils';

const defaultScale = {
	space : [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
};

const transform = (n, scale) => {
	if (!isNum(n)) return toPx(get(scale, n, n));

	const absolute = Math.abs(Math.floor(n));
	const baseValue = get(scale, absolute, absolute);
	const value = isPartial(n) ? baseValue + baseValue * 0.5 : baseValue;
	return toPx(isNeg(n) ? value * -1 : value);
};

const spacing = {
	margin        : {
		property     : 'margin',
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginTop     : {
		property     : 'marginTop',
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginRight   : {
		property     : 'marginRight',
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginBottom  : {
		property     : 'marginBottom',
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginLeft    : {
		property     : 'marginLeft',
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginX       : {
		properties   : [ 'marginLeft', 'marginRight' ],
		scale        : 'space',
		transform,
		defaultScale,
	},
	marginY       : {
		properties   : [ 'marginTop', 'marginBottom' ],
		scale        : 'space',
		transform,
		defaultScale,
	},
	padding       : {
		property     : 'padding',
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingTop    : {
		property     : 'paddingTop',
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingRight  : {
		property     : 'paddingRight',
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingBottom : {
		property     : 'paddingBottom',
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingLeft   : {
		property     : 'paddingLeft',
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingX      : {
		properties   : [ 'paddingLeft', 'paddingRight' ],
		scale        : 'space',
		transform,
		defaultScale,
	},
	paddingY      : {
		properties   : [ 'paddingTop', 'paddingBottom' ],
		scale        : 'space',
		transform,
		defaultScale,
	},
};

/** Margin system shorthand aliases. */
spacing.m = spacing.margin;
spacing.mt = spacing.marginTop;
spacing.mr = spacing.marginRight;
spacing.mb = spacing.marginBottom;
spacing.ml = spacing.marginLeft;
spacing.mx = spacing.marginX;
spacing.my = spacing.marginY;

/** Padding system shorthand aliases. */
spacing.p = spacing.padding;
spacing.pt = spacing.paddingTop;
spacing.pr = spacing.paddingRight;
spacing.pb = spacing.paddingBottom;
spacing.pl = spacing.paddingLeft;
spacing.px = spacing.paddingX;
spacing.py = spacing.paddingY;

export default system(spacing);
