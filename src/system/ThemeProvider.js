import React from 'react';
import ThemeContext from './ThemeContext';
import { setTheme } from './theme';
import { createStyleEngine } from './styleRenderer';

const ThemeProvider = ({ children, theme, styleEngine }) => {
	createStyleEngine(styleEngine);
	return (
		<ThemeContext.Provider value={{ theme: setTheme(theme) }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
