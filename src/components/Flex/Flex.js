import React, { forwardRef } from 'react';
import Box from './../Box';
import getCSS from './../../system/getCSS';
import { getFlexbox } from './../../system';

/**
 * Maps props to <Flex> CSS.
 * @public
 */
export const flexboxCss = getCSS(getFlexbox);

/**
 * @name <Flex>
 * @component
 * @public
 */
const Flex = forwardRef((props = {}, ref) => {
	const { styles, props: { children, ...passThru } } = flexboxCss(props);

	return (
		<Box styles={styles} ref={ref} {...passThru}>
			{children}
		</Box>
	);
});

Flex.displayName = 'Flex';

Flex.defaultProps = {
	inline : false,
};

export default Flex;
