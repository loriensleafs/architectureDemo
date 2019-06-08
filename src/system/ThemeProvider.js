import React from 'react';
import defaultTheme from './theme';
import ThemeContext from './ThemeContext';
import { merge } from './../utils';

const ThemeProvider = ({ children, theme = {} }) => (
	<ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
