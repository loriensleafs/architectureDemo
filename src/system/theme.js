export default {
	breakpoints  : [ 480, 765, 960, 1200, 1600 ],
	durations    : {
		shortest : 150,
		shorter  : 200,
		short    : 250,
		standard : 300,
		complex  : 375,
		entering : 225,
		leaving  : 195,
	},
	easings      : {
		inOut : 'cubic-bezier(0.4,0,0.2,1)',
		in    : 'cubic-bezier(0.4,0,1,1)',
		out   : 'cubic-bezier(0,0,0.2,1)',
		sharp : 'cubic-bezier(0.4,0,0.6,1)',
	},
	elevation    : [
		'0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
		'0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
		'0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
		'0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
		'0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)',
		'0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
		'0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12)',
		'0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
		'0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12)',
		'0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12)',
		'0 6px 7px -4px rgba(0,0,0,.2), 0 11px 15px 1px rgba(0,0,0,.14), 0 4px 20px 3px rgba(0,0,0,.12)',
		'0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)',
		'0 7px 8px -4px rgba(0,0,0,.2), 0 13px 19px 2px rgba(0,0,0,.14), 0 5px 24px 4px rgba(0,0,0,.12)',
		'0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12)',
		'0 8px 9px -5px rgba(0,0,0,.2), 0 15px 22px 2px rgba(0,0,0,.14), 0 6px 28px 5px rgba(0,0,0,.12)',
		'0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)',
		'0 8px 11px -5px rgba(0,0,0,.2), 0 17px 26px 2px rgba(0,0,0,.14), 0 6px 32px 5px rgba(0,0,0,.12)',
		'0 9px 11px -5px rgba(0,0,0,.2), 0 18px 28px 2px rgba(0,0,0,.14), 0 7px 34px 6px rgba(0,0,0,.12)',
		'0 9px 12px -6px rgba(0,0,0,.2), 0 19px 29px 2px rgba(0,0,0,.14), 0 7px 36px 6px rgba(0,0,0,.12)',
		'0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12)',
		'0 10px 13px -6px rgba(0,0,0,.2), 0 21px 33px 3px rgba(0,0,0,.14), 0 8px 40px 7px rgba(0,0,0,.12)',
		'0 10px 14px -6px rgba(0,0,0,.2), 0 22px 35px 3px rgba(0,0,0,.14), 0 8px 42px 7px rgba(0,0,0,.12)',
		'0 11px 14px -7px rgba(0,0,0,.2), 0 23px 36px 3px rgba(0,0,0,.14), 0 9px 44px 8px rgba(0,0,0,.12)',
		'0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)',
	],
	maxWidth     : '1200px',
	mediaQueries : [
		'@media screen and (min-width: 480px)',
		'@media screen and (min-width: 765px)',
		'@media screen and (min-width: 960px)',
		'@media screen and (min-width: 1200px)',
		'@media screen and (min-width: 1600px)',
		'@media screen and (min-width: undefinedpx)',
	],
	palette      : {
		common    : { white: '#ffffff', black: '#000000' },
		type      : 'light',
		primary   : {
			main         : '#128CED',
			light        : '#2c9bf3',
			dark         : '#0d7ed4',
			contrastText : '#ffffff',
		},
		secondary : {
			main         : '#F8D81C',
			light        : '#FFEC00',
			dark         : '#d2b613',
			contrastText : 'rgba(0, 0, 0, 0.87)',
		},
		tertiary  : {
			main         : '#EF6C00',
			light        : '#FF9800',
			dark         : '#d4670d',
			contrastText : 'rgba(0, 0, 0, 0.87)',
		},
		error     : {
			main         : '#f44336',
			light        : 'rgb(246, 104, 94)',
			dark         : 'rgb(170, 46, 37)',
			contrastText : '#ffffff',
		},
		grey      : { main: '#666666', light: '#DDDDDD', dark: '#333333' },
		dark      : {
			action  : {
				active       : '#ffffff',
				hover        : 'rgba(255, 255, 255, 0.1)',
				hoverOpacity : 0.01,
				selected     : 'rgba(255, 255, 255, 0.2)',
				disabled     : 'rgba(255, 255, 255, 0.3)',
				disabledBg   : 'rgba(255, 255, 255, 0.12)',
			},
			bg      : { default: '#303030', paper: '#424242' },
			divider : 'rgba(255, 255, 255, 0.12)',
			text    : {
				primary   : '#ffffff',
				secondary : 'rgba(255, 255, 255, 0.7)',
				disabled  : 'rgba(255, 255, 255, 0.5)',
				hint      : 'rgba(255, 255, 255, 0.5)',
				icon      : 'rgba(255, 255, 255, 0.5)',
			},
		},
		light     : {
			action  : {
				active       : 'rgba(0, 0, 0, 0.54)',
				hover        : 'rgba(0, 0, 0, 0.08)',
				hoverOpacity : 0.08,
				selected     : 'rgba(0, 0, 0, 0.14)',
				disabled     : 'rgba(0, 0, 0, 0.26)',
				disabledBg   : 'rgba(0, 0, 0, 0.12)',
			},
			bg      : { default: '#fafafa', paper: '#ffffff' },
			divider : 'rgba(0, 0, 0, 0.12)',
			text    : {
				primary   : '#333333',
				secondary : '#555555',
				disabled  : 'rgba(0, 0, 0, 0.38)',
				hint      : '#999999',
				icon      : '#333333',
			},
		},
		action    : {
			active       : 'rgba(0, 0, 0, 0.54)',
			hover        : 'rgba(0, 0, 0, 0.08)',
			hoverOpacity : 0.08,
			selected     : 'rgba(0, 0, 0, 0.14)',
			disabled     : 'rgba(0, 0, 0, 0.26)',
			disabledBg   : 'rgba(0, 0, 0, 0.12)',
		},
		bg        : { default: '#FCFCFC', paper: '#F9F9F9' },
		divider   : 'rgba(0, 0, 0, 0.12)',
		text      : {
			primary   : 'rgba(0, 0, 0, 0.87)',
			secondary : 'rgba(0, 0, 0, 0.54)',
			disabled  : 'rgba(0, 0, 0, 0.38)',
			hint      : 'rgba(0, 0, 0, 0.38)',
			icon      : 'rgba(0, 0, 0, 0.54)',
		},
	},
	shape        : {
		borderRadius : { square: '0px', round: '4px', circular: '50%' },
	},
	space        : [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
	typography   : {
		fontFamilies   : {
			paragraph : '"Roboto", "Helvetica", "Arial", sans-serif',
			header    : '"Roboto", "Helvetica", "Arial", sans-serif',
			ui        : '"Roboto", "Helvetica", "Arial", sans-serif',
		},
		fontSizes      : [
			0.625,
			0.75,
			0.875,
			1,
			1.25,
			1.5,
			2.125,
			3,
			3.75,
			6,
		],
		fontWeights    : { light: 300, regular: 400, medium: 500, bold: 700 },
		htmlFontSize   : 16,
		letterSpacings : { normal: 'normal', caps: '0.025em' },
		lineHeights    : [
			1.125,
			1.25,
			1.5,
			1.75,
			2,
			2.125,
			3,
			4.5,
			5.5,
			1.75,
		],
		unit           : 'rem',
		variants       : {
			h1        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 300,
				fontSize   : '3.6rem',
				lineHeight : 1.11111,
			},
			h2        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 300,
				fontSize   : '3rem',
				lineHeight : 1.2,
			},
			h3        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 500,
				fontSize   : '2.4rem',
				lineHeight : 1.25,
			},
			h4        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 300,
				fontSize   : '2.4rem',
				lineHeight : 1.25,
			},
			h5        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 400,
				fontSize   : '1.8rem',
				lineHeight : 1.33333,
			},
			h6        : {
				color      : '#333333',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 500,
				fontSize   : '1.8rem',
				lineHeight : 1.33333,
			},
			subtitle1 : {
				color      : 'rgba(0, 0, 0, 0.87)',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 400,
				fontSize   : '1rem',
				lineHeight : 1.75,
			},
			subtitle2 : {
				color      : 'rgba(0, 0, 0, 0.87)',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 500,
				fontSize   : '0.875rem',
				lineHeight : 1.57,
			},
			body1     : {
				color      : 'rgba(0, 0, 0, 0.87)',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 400,
				fontSize   : '1rem',
				lineHeight : 1.5,
			},
			body2     : {
				color      : 'rgba(0, 0, 0, 0.87)',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 400,
				fontSize   : '0.875rem',
				lineHeight : 1.5,
			},
			button    : {
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 600,
				fontSize   : '1.8rem',
				lineHeight : 1,
			},
			caption   : {
				color      : 'rgba(0, 0, 0, 0.87)',
				fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight : 400,
				fontSize   : '0.75rem',
				lineHeight : 1.66,
			},
			overline  : {
				color         : 'rgba(0, 0, 0, 0.87)',
				fontFamily    : '"Roboto", "Helvetica", "Arial", sans-serif',
				fontWeight    : 400,
				fontSize      : '0.625rem',
				lineHeight    : 2.66,
				textTransform : 'uppercase',
			},
		},
	},
};
