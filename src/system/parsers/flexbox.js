import { compose, system } from '@styled-system/core';

export default system({
	inline         : {
		property  : 'display',
		transform : value => (value ? 'inline-flex' : 'flex'),
	},
	alignItems     : true,
	alignContent   : true,
	justifyItems   : true,
	justifyContent : true,
	flexWrap       : true,
	direction      : {
		property : 'flexDirection',
	},
});
