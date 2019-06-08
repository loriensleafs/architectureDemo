import PropTypes from 'prop-types';
import theme from './theme';
import { get } from './../utils';

const numOrStrPropType = PropTypes.oneOfType([
	PropTypes.number,
	PropTypes.string,
]);

const variant = ({ themeKey, prop = 'variant' }) => {
	const fn = props => {
		return get(theme, themeKey)[props[prop]];
	};
	fn.propTypes = {
		[prop] : numOrStrPropType,
	};

	return fn;
};

export default variant;
