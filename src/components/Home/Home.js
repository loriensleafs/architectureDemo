import React, { Fragment } from 'react';
import Box from './../Box';
import Button from './../Button';
import Flex from './../Flex';
import Container from './../Container';
import { getCss } from './../../system';
import { ChevronRightIcon, PhotoIcon } from './../svgs';

const getCardStyles = (props = {}) => {
	const {
		disableElevation = false,
		disableHover = false,
		elevation = 2,
		theme,
	} = props;
	const next = {};

	if (!disableElevation) {
		next.boxShadow = theme.elevations[elevation];
		if (!disableHover) {
			next[':hover'] = {
				boxShadow : theme.elevations[elevation + 2],
			};
		}
	}

	return next;
};

const cardCss = getCss(getCardStyles);

const Card = ({ children, ...props }) => (
	<Box radius='round' styles={cardCss(props, 'styles')} {...props}>
		{children}
	</Box>
);

const OfferItem = (props = {}) => (
	<Card py={3} px={4} my={2} mx={3} w='136px'>
		<Flex
			bg='grey.light'
			color='text.secondary'
			justifyContent='center'
			alignItems='center'
			h='100px'
			p={3}
			mb={3}
			mx={2}
		>
			<PhotoIcon color='white' />
		</Flex>
		<Box color='primary.main' textAlign='center' typography='h6'>
			Offer Title
		</Box>
	</Card>
);

const OfferCarousel = (props = {}) => (
	<Box m={4}>
		<Flex justifyContent='flex-start' alignItems='center' my={3}>
			<Box typography='h2' fontWeight='bold' mr={4}>
				Some Sort Of Amazing Deal
			</Box>
			<Button color='primary'>
				Shop All
				<ChevronRightIcon size='small' ml={2} />
			</Button>
		</Flex>
		<Flex>
			<OfferItem />
			<OfferItem />
			<OfferItem />
			<OfferItem />
			<OfferItem />
			<OfferItem />
		</Flex>
	</Box>
);

/**
 * @name <Home>
 * @component
 * @public
 */
const Home = (props = {}) => (
	<Fragment>
		<Container>
			<Box
				my={3}
				typography='h6'
				color='primary.light'
				textAlign='center'
			>
				{`<Home>`}
				<Box as='span' color='text.hint'>
					- loaded asynchronously when route state is '/home'
				</Box>
			</Box>
		</Container>
		<Box bg='grey.main' color='white' typography='h2'>
			<Container>
				<Flex h='350px' justifyContent='center' alignItems='center'>
					CAROUSEL
				</Flex>
			</Container>
		</Box>
		<Box mt={3}>
			<Container>
				<OfferCarousel />
			</Container>
		</Box>
	</Fragment>
);

Home.displayName = 'Home';

export default Home;
