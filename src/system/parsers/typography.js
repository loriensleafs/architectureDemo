import { compose, system, variant } from '@styled-system/core';

const defaults = {
	fontSizes : [ 0.625, 0.75, 0.875, 1, 1.25, 1.5, 2.125, 3, 3.75, 6 ],
};

export const variants = variant({
	scale : 'typography',
	prop  : 'typography',
});

export default system({
	fontFamily    : {
		property : 'fontFamily',
		scale    : 'fonts',
	},
	fontSize      : {
		property     : 'fontSize',
		scale        : 'fontSizes',
		defaultScale : defaults.fontSizes,
	},
	fontWeight    : {
		property : 'fontWeight',
		scale    : 'fontWeights',
	},
	lineHeight    : {
		property : 'lineHeight',
		scale    : 'lineHeights',
	},
	letterSpacing : {
		property : 'letterSpacing',
		scale    : 'letterSpacings',
	},
	textAlign     : true,
	fontStyle     : true,
});
