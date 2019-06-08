import { system } from '@styled-system/core';
import { isNeg, isNum, isPartial, get, toPx } from './../../utils';

const defaults = {
	space : [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
};

const getValue = (n, scale) => {
	if (!isNum(n)) {
		return toPx(get(scale, n, n));
	}

	const absolute = Math.abs(Math.floor(n));
	const baseValue = get(scale, absolute, absolute);
	const value = isPartial(n) ? baseValue + baseValue * 0.5 : baseValue;
	return toPx(isNeg(n) ? value * -1 : value);
};

const configs = {};
configs.margin = {
	margin       : {
		property     : 'margin',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginTop    : {
		property     : 'marginTop',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginRight  : {
		property     : 'marginRight',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginBottom : {
		property     : 'marginBottom',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginLeft   : {
		property     : 'marginLeft',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginX      : {
		properties   : [ 'marginLeft', 'marginRight' ],
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	marginY      : {
		properties   : [ 'marginTop', 'marginBottom' ],
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;

configs.padding = {
	padding       : {
		property     : 'padding',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingTop    : {
		property     : 'paddingTop',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingRight  : {
		property     : 'paddingRight',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingBottom : {
		property     : 'paddingBottom',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingLeft   : {
		property     : 'paddingLeft',
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingX      : {
		properties   : [ 'paddingLeft', 'paddingRight' ],
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
	paddingY      : {
		properties   : [ 'paddingTop', 'paddingBottom' ],
		scale        : 'space',
		transform    : getValue,
		defaultScale : defaults.space,
	},
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;

export const margin = system(configs.margin);
export const padding = system(configs.padding);
export const space = system({ ...configs.margin, ...configs.padding });

export default space;
