import React from 'react';
import getCSS from './getCSS';
import {
	getBorders,
	getColors,
	getBg,
	getColor,
	getElevation,
	getFlex,
	getOpacity,
	getPositions,
	getSizing,
	getSpacing,
	getText,
} from './styles';
import { isObj, isStr } from './../utils';

const css = getCSS(
	getBorders,
	getElevation,
	getFlex,
	getOpacity,
	getPositions,
	getSizing,
	getSpacing,
	getText,
	getColors,
);
css.propTypes = {
	...getBorders.propTypes,
	...getElevation.propTypes,
	...getFlex.propTypes,
	...getOpacity.propTypes,
	...getPositions.propTypes,
	...getSizing.propTypes,
	...getSpacing.propTypes,
	...getText.propTypes,
	...getColors.propTypes,
};

export default (type, props, ...children) => {
	if (isObj(props.css)) {
		const { css: cssProp, classes, ...passThru } = props;
		const next = css({ ...props.css, className: props.className }, [
			'classes',
			'styles',
		]);

		props = { ...passThru, className: next.classes };
	}

	if (props.styled) {
		const next = css(props);
		props = { ...next.props, className: next.classes };
	}

	return React.createElement.apply(undefined, [
		type,
		props ? props : null,
		...children,
	]);
};
