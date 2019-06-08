import React from 'react';
import SvgIcon from './../SvgIcon';

/**
 * Chewy design system doesn't have a chevron up arrow.
 * I think this chevron down arrow is from font awesome so we'll pull
 * the svg mark up for this icon from font awesome - otherwise we'll just
 * rotate the icon in Adobe Illustrator, copy the svg markup and use that.
 * @todo Update the svg markup so this is a chevron up arrow
 */
const ChevronUpIcon = props => (
	<SvgIcon {...props}>
		<path
			d='M12.033 13.225l6.314-6.314a2.828 2.828 0 0 1 3.998-.003 2.83 2.83 0 0 1-.003 3.998l-8.196 8.196a2.84 2.84 0 0 1-.48.386c-1.088.76-2.6.65-3.565-.315l-8.407-8.406a2.788 2.788 0 0 1 0-3.94 2.792 2.792 0 0 1 3.94 0l6.399 6.398z'
			fill-rule='evenodd'
		/>
	</SvgIcon>
);

ChevronUpIcon.displayName = 'ChevronUpIcon';

export default ChevronUpIcon;
