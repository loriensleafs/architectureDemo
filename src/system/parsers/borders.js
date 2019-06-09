import { system } from '@styled-system/core';

export default system({
	border       : {
		properties : [
			'borderLeft',
			'borderRight',
			'borderTop',
			'borderBottom',
		],
	},
	borderX      : {
		properties : [ 'borderLeft', 'borderRight' ],
	},
	borderY      : {
		properties : [ 'borderTop', 'borderBottom' ],
	},
	borderTop    : {
		property : 'borderTop',
	},
	borderRight  : {
		property : 'borderRight',
	},
	borderBottom : {
		property : 'borderBottom',
	},
	borderLeft   : {
		property : 'borderLeft',
	},
	borderWidth  : {
		property : 'borderWidth',
	},
	borderStyle  : {
		property : 'borderStyle',
	},
	borderColor  : {
		property : 'borderColor',
		scale    : 'colors',
	},
	borderRadius : {
		property : 'borderRadius',
		scale    : 'shape.borderRadius',
	},
});
