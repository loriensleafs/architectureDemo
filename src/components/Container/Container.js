import React from 'react';
import Box from './../Box';

/**
 * @name <Container>
 * @component
 * @public
 */
const Container = ({ children, disableGutters, ...props }) => (
	<Box
		boxSizing='border-box'
		w={1}
		wMax='1400px'
		mx='auto'
		px={disableGutters ? null : [ 3, 4, 5 ]}
		flex={1}
		{...props}
	>
		{children}
	</Box>
);

Container.displayName = 'Container';

Container.defaultProps = {
	disableGutters : false,
};

export default Container;
