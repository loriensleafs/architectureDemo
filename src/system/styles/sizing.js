import PropTypes from 'prop-types';
import style from './../style';
import { combine, isNum, toPx } from './../../utils';

const transformSize = val =>
	!isNum(val) || val > 1 ? toPx(val) : val * 100 + '%';

const getBoxSizing = style({
	prop : 'boxSizing',
});

const getHeightSize = style({
	prop      : 'h',
	cssProp   : 'height',
	transform : transformSize,
});

const getMaxHeightSize = style({
	prop      : 'hMax',
	cssProp   : 'maxHeight',
	transform : transformSize,
});

const getMinHeightSize = style({
	prop      : 'hMin',
	cssProp   : 'minHeight',
	transform : transformSize,
});

const getHeight = combine(getHeightSize, getMaxHeightSize, getMinHeightSize);
getHeight.propTypes = {
	...getHeightSize.propTypes,
	...getMaxHeightSize.propTypes,
	...getMinHeightSize.propTypes,
};

const getWidthSize = style({
	prop      : 'w',
	cssProp   : 'width',
	transform : transformSize,
});

const getMaxWidthSize = style({
	prop      : 'wMax',
	cssProp   : 'maxWidth',
	transform : transformSize,
});

const getMinWidthSize = style({
	prop      : 'wMin',
	cssProp   : 'minWidth',
	transform : transformSize,
});

const getWidth = combine(getWidthSize, getMaxWidthSize, getMinWidthSize);
getWidth.propTypes = {
	...getWidthSize.propTypes,
	...getMaxWidthSize.propTypes,
	...getMinWidthSize.propTypes,
};

const getSizing = combine(getBoxSizing, getHeight, getWidth);
getSizing.propTypes = {
	...getBoxSizing.propTypes,
	...getHeight.propTypes,
	...getWidth.propTypes,
};

export {
	getBoxSizing,
	getHeightSize,
	getMaxHeightSize,
	getMinHeightSize,
	getHeight,
	getWidthSize,
	getMaxWidthSize,
	getMinWidthSize,
	getWidth,
};

export default getSizing;
