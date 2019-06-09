import { Client } from 'styletron-engine-atomic';
import { isFn, isObj } from '../utils';

const engine = window.styletronClient || new Client();

function renderStyles(styles) {
	return isObj(styles) ? engine.renderStyle(styles) : {};
}

export const setStyleRenderer = renderer => {
	if (isFn(renderer)) {
		renderStyles = renderer;
	}
};

export default renderStyles;
