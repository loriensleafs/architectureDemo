import React, { forwardRef } from 'react';
import Box from './../Box';
import getCSS from './../../system/getCSS';
import { getFlexbox } from './../../system/styles';

/**
 * Maps props to <Flex> CSS.
 * @public
 */
export const css = getCSS(getFlexbox);

/**
 * @name <Flex>
 * @component
 * @public
 */
const Flex = forwardRef((props = {}, ref) => {
	const { styles, props: { children, ...passThru } } = css(props);

	return (
		<Box styles={styles} ref={ref} {...passThru}>
			{children}
		</Box>
	);
});

Flex.displayName = 'Flex';

export default Flex;
