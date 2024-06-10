import { Fragment } from 'react';

import { Goals, Header } from './components';

export default function Home() {
	return (
		<Fragment>
			<Header />

			<Goals id="goals" />
		</Fragment>
	);
}
