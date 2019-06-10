import { useCallback, useEffect, useMemo, useState } from 'react';
import { theme } from './../system';

const { aliases, breakpoints } = theme;

const getBps = bps => [ 0, ...bps ].map(bp => `(min-width: ${bp}px)`);

const getQuery = (queries, query) => {
	const idx = queries.indexOf(query.media);
	const alias = aliases[queries.indexOf(query.media)];
	const next = { [alias]: query.matches };
	if (query.matches) {
		next.active = alias;
	} else if (idx !== 0 && matchMedia(queries[idx - 1]).matches) {
		next.active = aliases[idx - 1];
	}
	return next;
};

const initialState = queries =>
	queries.reduce(
		(acc, q) => ({ ...acc, ...getQuery(queries, matchMedia(q)) }),
		{},
	);

const useMedia = (bps = breakpoints) => {
	const queries = useMemo(() => getBps(bps), [ bps ]);
	const [ media, setMedia ] = useState(initialState(queries));

	const handleChange = useCallback(
		list =>
			setMedia(state => ({
				...state,
				...getQuery(queries, list),
			})),
		[ queries ],
	);

	useEffect(
		() => {
			let lists = queries.map(q => matchMedia(q));
			lists.forEach(l => l.addListener(handleChange));
			return () => lists.forEach(l => l.removeListener(handleChange));
		},
		[ queries ],
	);

	return media;
};

export default useMedia;
