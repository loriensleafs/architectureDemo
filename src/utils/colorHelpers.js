import warning from 'warning';

function clamp(value, min = 0, max = 1) {
	warning(
		value >= min && value <= max,
		`Material-UI: the value provided ${value} is out of range [${min}, ${max}].`,
	);

	if (value < min) return min;
	if (value > max) return max;

	return value;
}

function convertHexToRGB(color) {
	color = color.substr(1);
	const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
	let colors = color.match(re);

	if (colors && colors[0].length === 1) {
		colors = colors.map(n => n + n);
	}

	return colors ? `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})` : '';
}

function rgbToHex(color) {
	// Pass hex straight through
	if (color.indexOf('#') === 0) {
		return color;
	}

	function intToHex(c) {
		const hex = c.toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	}

	let { values } = decomposeColor(color);
	values = values.map(n => intToHex(n));

	return `#${values.join('')}`;
}

function decomposeColor(color) {
	if (color.charAt(0) === '#') {
		return decomposeColor(convertHexToRGB(color));
	}

	const marker = color.indexOf('(');
	const type = color.substring(0, marker);
	let values = color.substring(marker + 1, color.length - 1).split(',');
	values = values.map(value => parseFloat(value));

	if (process.env.NODE_ENV !== 'production') {
		if ([ 'rgb', 'rgba', 'hsl', 'hsla' ].indexOf(type) === -1) {
			throw new Error(
				[
					`Material-UI: unsupported \`${color}\` color.`,
					'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
				].join('\n'),
			);
		}
	}

	return { type, values };
}

function recomposeColor(color) {
	const { type } = color;
	let { values } = color;

	if (type.indexOf('rgb') !== -1) {
		// Only convert the first 3 values to int (i.e. not alpha)
		values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
	}

	if (type.indexOf('hsl') !== -1) {
		values[1] = `${values[1]}%`;
		values[2] = `${values[2]}%`;
	}

	return `${color.type}(${values.join(', ')})`;
}

function getContrastRatio(foreground, background) {
	const lumA = getLuminance(foreground);
	const lumB = getLuminance(background);
	return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

function getLuminance(color) {
	const decomposedColor = decomposeColor(color);

	if (decomposedColor.type.indexOf('rgb') !== -1) {
		const rgb = decomposedColor.values.map(val => {
			val /= 255; // normalized
			return val <= 0.03928
				? val / 12.92
				: ((val + 0.055) / 1.055) ** 2.4;
		});
		// Truncate at 3 digits
		return Number(
			(0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3),
		);
	}

	// else if (decomposedColor.type.indexOf('hsl') !== -1)
	return decomposedColor.values[2] / 100;
}

const emphasize = (color, coefficient = 0.15) =>
	getLuminance(color) > 0.5
		? darken(color, coefficient)
		: lighten(color, coefficient);

function fade(color, amount) {
	warning(
		color,
		`Material-UI: missing color argument in fade(${color}, ${amount}).`,
	);

	if (!color) return color;

	color = decomposeColor(color);
	amount = clamp(amount);

	if (color.type === 'rgb' || color.type === 'hsl') {
		color.type += 'a';
	}
	color.values[3] = amount;

	return recomposeColor(color);
}

function darken(color, coefficient) {
	warning(
		color,
		`Material-UI: missing color argument in darken(${color}, ${coefficient}).`,
	);

	if (!color) return color;

	color = decomposeColor(color);
	coefficient = clamp(coefficient);

	if (color.type.indexOf('hsl') !== -1) {
		color.values[2] *= 1 - coefficient;
	} else if (color.type.indexOf('rgb') !== -1) {
		for (let i = 0; i < 3; i += 1) {
			color.values[i] *= 1 - coefficient;
		}
	}

	return recomposeColor(color);
}

function lighten(color, coefficient) {
	warning(
		color,
		`Material-UI: missing color argument in lighten(${color}, ${coefficient}).`,
	);

	if (!color) return color;

	color = decomposeColor(color);
	coefficient = clamp(coefficient);

	if (color.type.indexOf('hsl') !== -1) {
		color.values[2] += (100 - color.values[2]) * coefficient;
	} else if (color.type.indexOf('rgb') !== -1) {
		for (let i = 0; i < 3; i += 1) {
			color.values[i] += (255 - color.values[i]) * coefficient;
		}
	}

	return recomposeColor(color);
}

function addLightOrDark(intent, direction, shade, tonalOffset) {
	//if (!intent[direction]) {
	if (intent.hasOwnProperty(shade)) {
		intent[direction] = intent[shade];
	} else if (direction === 'light') {
		intent.light = lighten(intent.main, tonalOffset);
	} else if (direction === 'dark') {
		intent.dark = darken(intent.main, tonalOffset * 1.5);
	}
	//}
}

export {
	addLightOrDark,
	clamp,
	convertHexToRGB,
	darken,
	emphasize,
	fade,
	getContrastRatio,
	getLuminance,
	lighten,
	rgbToHex,
};
