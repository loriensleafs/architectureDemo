import { system } from '@styled-system/core';

const colors = {
	color           : {
		property : 'color',
		scale    : 'colors',
	},
	backgroundColor : {
		property : 'backgroundColor',
		scale    : 'colors',
	},
	opacity         : true,
};

/** Color system shorthand aliases. */
colors.bg = config.backgroundColor;

export default system(colors);
