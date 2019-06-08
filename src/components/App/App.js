import React, { Fragment, Suspense, lazy } from 'react';
import { Router, Link } from '@reach/router';
import AppBar from './../AppBar';
import Footer from './../Footer';
import Box from './../Box';
import { KeyboardArrowDownIcon } from './../svgs';
import Flex from './../Flex';
import Progress from './../Progress';
import ThemeProvider from './../../system/ThemeProvider';
import logo from './logo.svg';
import './App.css';

/**
 * Components that are lozy loaded.
 */
const Home = lazy(() => import('./../Home'));
const Cart = lazy(() => import('./../Cart'));
const Account = lazy(() => import('./../Account'));

/**
 * @name <Loading>
 * @component
 * @private
 */
const Loading = () => (
	<Flex justifyContent='center' alignItems='center' w={1} h={1}>
		<Progress color='primary' />
	</Flex>
);

/**
 * @name <App>
 * @component
 * @public
 */
const App = (props = {}) => (
	<ThemeProvider theme={{}}>
		<Flex direction='column' h={1} hMin='100vh' position='relative'>
			<AppBar />
			<Box flex={1} hMin='500px'>
				<Suspense fallback={<Loading />}>
					<Router>
						<Home path='/' />
						<Cart path='/cart' />
						<Account path='/account' />
					</Router>
				</Suspense>
			</Box>
			<Footer />
		</Flex>
	</ThemeProvider>
);

App.displayName = 'App';

export default App;
