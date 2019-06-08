import React from 'react';
import { Link } from '@reach/router';
import Box from './../Box';
import Button from './../Button';
import { TruckIcon } from './../svgs';

/**
 * @name <FreeShippingButton>
 * @component
 * @public
 */
const FreeShippingButton = (props = {}) => (
	<Button
		as={Link}
		to='/account'
		color='primary'
		variant='contained'
		{...props}
	>
		<Box as='span' color='secondary.main' fontWeight='bold'>
			FREE 1-2 DAY SHIPPING OVER $49!
		</Box>
		<TruckIcon color='white' size='large' ml={3} />
	</Button>
);

FreeShippingButton.displayName = 'FreeShippingButton';

export default FreeShippingButton;
