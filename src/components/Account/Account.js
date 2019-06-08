import React from 'react';
import Box from './../Box';
import Container from './../Container';

/**
 * @name <Account>
 * @component
 * @public
 */
const Account = (props = {}) => (
	<Container>
		<Box mt={3} typography='h4'>
			Account Page
		</Box>
		<Box mt={3} typography='body1'>
			Dynamically Loaded via '/account' route.
		</Box>
	</Container>
);

Account.displayName = 'Account';

export default Account;
