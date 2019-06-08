import React from 'react';
import { Link } from '@reach/router';
import Box from './../Box';
import Button from './../Button';
import CartButton from './../CartButton';
import Container from './../Container';
import Divider from './../Divider';
import Flex from './../Flex';
import FreeShippingButton from './../FreeShippingButton';
import {
	CartIcon,
	ChevronDownIcon,
	LocalShippingIcon,
	ShoppingCartIcon,
} from './../svgs';
import logoImage from './logo.svg';

/**
 * @name <AppBar>
 * @component
 * @public
 */
const AppBar = (props = {}) => (
	<Box bg='primary.main' elevation={8} position='sticky' top='0px'>
		<Container py={3}>
			<Flex justifyContent='center' direction='column'>
				<Flex justifyContent='space-between'>
					<Link to='/'>
						<img src={logoImage} />
					</Link>
					<input style={{ width: '550px' }} />
					<Flex ml={4}>
						<Button
							as={Link}
							to='/help'
							color='primary'
							variant='contained'
						>
							24/7 help
							<ChevronDownIcon color='secondary' ml={2} />
						</Button>
						<Button
							as={Link}
							to='/account'
							color='primary'
							variant='contained'
						>
							your account
							<ChevronDownIcon color='secondary' ml={2} />
						</Button>
						<CartButton selected />
					</Flex>
				</Flex>
				<Flex mt={3.5}>
					<Flex flex={3} justifyContent='space-between'>
						<Button color='primary' variant='contained'>
							<Box
								as='span'
								color='inherit'
								typography='h3'
								fontWeight='bold'
							>
								shop by pet
							</Box>
							<ChevronDownIcon color='secondary' ml={2} />
						</Button>
						<Button
							as={Link}
							to='/account'
							color='primary'
							variant='contained'
						>
							shop by brand
						</Button>
						<Button
							as={Link}
							to='/account'
							color='primary'
							variant='contained'
						>
							pharmacy
							<ChevronDownIcon color='secondary' ml={2} />
						</Button>
						<Button
							as={Link}
							to='/account'
							color='primary'
							variant='contained'
						>
							todays deals
						</Button>
					</Flex>
					<Flex flex={2} justifyContent='flex-end'>
						<FreeShippingButton />
					</Flex>
				</Flex>
			</Flex>
		</Container>
	</Box>
);

AppBar.displayName = 'AppBar';

export default AppBar;
