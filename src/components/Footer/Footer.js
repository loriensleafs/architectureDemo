import React from 'react';
import { Link } from '@reach/router';
import Flex from './../Flex';

/**
 * @name <Footer>
 * @component
 * @public
 */
const Footer = (props = {}) => (
	<Flex
		justifyContent='center'
		alignItems='center'
		position='sticky'
		bottom='0px'
		w={1}
		py={4}
		bg='black'
		color='white'
	>
		FOOTER
	</Flex>
);

Footer.displayName = 'Footer';

export default Footer;
