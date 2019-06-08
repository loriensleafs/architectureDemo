import React from 'react';
import { Link } from '@reach/router';
import Box from './../Box';
import Button from './../Button';
import { CartIcon, ChevronDownIcon } from './../svgs';

/**
 * @name <CartButton>
 * @component
 * @public
 */
const CartButton = (props = {}) => (
	<Button as={Link} to='/cart' color='primary' variant='contained' {...props}>
		<CartIcon color='inherit' size='large' mr={1.5} />
		your cart
		<ChevronDownIcon color='secondary' ml={2} />
	</Button>
);

CartButton.displayName = 'CartButton';

export default CartButton;
