import React, { forwardRef } from 'react';
import Box from './../Box';
import { getCss, getFlexbox } from './../../system';

/**
 * Base styles parser.
 */
const getStyles = props => ({
	display : props.inline ? 'inline-flex' : 'flex',
});
getStyles.propNames = [ 'inline' ];

/**
 * System UI styles parser.
 */
export const flexCss = getCss(getStyles, getFlexbox);

/**
 * System UI component.
 */
const Flex = forwardRef((props = {}, ref) => {
	const { styles, props: { children, ...passThru } } = flexCss(props);

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
