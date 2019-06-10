import React from 'react';
import { Link } from '@reach/router';
import Box from './../Box';
import Button from './../Button';
import CartButton from './../CartButton';
import Container from './../Container';
import Divider from './../Divider';
import Flex from './../Flex';
import Text from './../Text';
import FreeShippingButton from './../FreeShippingButton';
import { useMedia } from './../../hooks';
import {
	CartIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	LocalShippingIcon,
	ShoppingCartIcon,
} from './../svgs';
import logoImage from './logo.svg';

/**
 * <ToggleButton> component.
 */
const NavigationButton = props => (
	<Button {...props} as={props.to ? Link : 'button'} />
);
NavigationButton.defaultProps = {
	as      : Link,
	color   : 'primary',
	variant : 'contained',
};

/**
 * <AppBar> component.
 */
const AppBar = (props = {}) => {
	const media = useMedia();
	console.log('media => ', media);

	return (
		<Box
			bg='primary.main'
			elevation={8}
			py={3.5}
			position='sticky'
			top='0px'
		>
			<Container>
				<Flex justifyContent='center' direction='column'>
					<Flex justifyContent='space-between'>
						<Link to='/'>
							<img src={logoImage} />
						</Link>
						<input style={{ width: '550px' }} />
						<Flex ml={4}>
							<NavigationButton to='/help'>
								24/7 help
								<ChevronDownIcon color='secondary' ml={2} />
							</NavigationButton>
							<NavigationButton to='/account'>
								your account
								<ChevronDownIcon color='secondary' ml={2} />
							</NavigationButton>
							<CartButton selected />
						</Flex>
					</Flex>
					<Flex mt={3.5}>
						<Flex flex={3} justifyContent='flex-start'>
							<NavigationButton>
								<Text fontWeight='bold' typography='h2'>
									shop by pet
								</Text>
							</NavigationButton>
							<NavigationButton to='/account'>
								shop by brand
							</NavigationButton>
							<NavigationButton to='/account'>
								pharmacy
								<ChevronDownIcon color='secondary' ml={2} />
							</NavigationButton>
							<NavigationButton to='/account'>
								todays deals
							</NavigationButton>
						</Flex>
						<Flex flex={2} justifyContent='flex-end'>
							<FreeShippingButton />
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

AppBar.displayName = 'AppBar';

export default AppBar;
