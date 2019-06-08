export default {
	breakpoints  : [ 480, 765, 960, 1200, 1600 ],
	mediaQueries : [
		'@media screen and (min-width: 480px)',
		'@media screen and (min-width: 765px)',
		'@media screen and (min-width: 960px)',
		'@media screen and (min-width: 1200px)',
		'@media screen and (min-width: 1600px)',
	],
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
	colors       : {
		primary    : '#128CED',
		primarys   : [],
		secondary  : '#128CED',
		secondarys : [],
		tertiary   : '',
		tertiarys  : [],
		white      : '#ffffff',
		black      : '#000000',
		greys      : [],
		bg         : '#fafafa',
		bgs        : [],
	},
};
