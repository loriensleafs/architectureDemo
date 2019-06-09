import React from 'react';
import Box from './../Box';

/**
 * Pre-composed System UI component.
 */
const Container = ({ children, ...props }) => <Box {...props}>{children}</Box>;

Container.displayName = 'Container';

Container.defaultProps = {
	w    : 1,
	wMax : '1400px',
	mx   : 'auto',
	px   : [ 3, 4, 5 ],
	flex : 1,
};

export default Container;
