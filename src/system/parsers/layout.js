import { system, get } from '@styled-system/core';
import { isNum } from './../../utils';

const getSize = (n, scale) =>
	get(scale, n, !isNum(n) || n > 1 ? n : n * 100 + '%');

const layout = {
	width         : {
		properties : 'width',
		transform  : getSize,
	},
	height        : {
		property  : 'height',
		transform : getSize,
	},
	minWidth      : {
		property  : 'minWidth',
		transform : getSize,
	},
	minHeight     : {
		property  : 'minHeight',
		transform : getSize,
	},
	maxWidth      : {
		property  : 'maxWidth',
		transform : getSize,
	},
	maxHeight     : {
		property  : 'maxHeight',
		transform : getSize,
	},
	size          : {
		properties : [ 'width', 'height' ],
		transform  : getSize,
	},
	overflow      : true,
	display       : true,
	verticalAlign : true,
};

/** Dimension system shorthands. */
layout.w = layout.width;
layout.h = layout.height;
layout.wMin = layout.minWidth;
layout.hMin = layout.minHeight;
layout.wMax = layout.maxWidth;
layout.hMax = layout.maxHeight;

export default system(layout);
