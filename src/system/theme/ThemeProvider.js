import React from 'react';
import jsx from './../jsx';
import ThemeContext from './ThemeContext';
import { setTheme } from './theme';
import { setStyleRenderer } from './../styleRenderer';

const ThemeProvider = ({ children, theme }) => {
	return (
		<ThemeContext.Provider value={{ theme: setTheme(theme) }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
