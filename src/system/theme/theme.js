import defaultTheme from './defaultTheme';
import { isObj, merge } from './../../utils';

let theme = { ...defaultTheme };

export const setTheme = newTheme => {
	if (isObj(newTheme)) {
		theme = merge(theme, newTheme);
	}
	return theme;
};

export default theme;
