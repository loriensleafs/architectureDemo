import React, { forwardRef } from 'react';
import Box from './../Box';
import { getCss, getTypography } from './../../system';

const isHeader = variant => variant.substring(0, 1).toLowerCase() === 'h';

/**
 * System UI styles parser.
 */
export const textCss = getCss(getTypography);

/**
 * System UI component.
 */
const Text = forwardRef((props = {}, ref) => {
	const {
		styles,
		props  : { as: ComponentProp, children, ...passThru },
	} = textCss(props);
	const Component = ComponentProp
		? ComponentProp
		: isHeader(props.typography)
			? props.typography
			: props.typography === 'caption' ? 'span' : 'p';

	return (
		<Box as={Component} styles={styles} ref={ref} {...passThru}>
			{children}
		</Box>
	);
});

Text.displayName = 'Text';

Text.defaultProps = {
	m          : 0,
	typography : 'body1',
};

export default Text;
