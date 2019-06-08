import React from 'react';
import Box from './../Box';
import Container from './../Container';

/**
 * @name <Cart>
 * @component
 * @public
 */
const Cart = (props = {}) => (
	<Container>
		<Box mt={3} typography='h4'>
			Cart Page
		</Box>
		<Box mt={3} typography='body1'>
			Dynamically Loaded via '/cart' route.
		</Box>
	</Container>
);

Cart.displayName = 'Cart';

export default Cart;
