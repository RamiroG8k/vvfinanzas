import { Fragment } from 'react';

import {
	Header,
	Goals,
	PromotionalBanner,
	Services,
	OurTools,
	Plans,
	Contact
} from './components';

export default function Home() {
	return (
		<Fragment>
			<Header />

			<Goals id="goals" />

			<PromotionalBanner className="my-20" />

			<Services id="services" className="py-10" />

			<OurTools id="about" />

			<Plans id="con" />

			<Contact id="con" />
		</Fragment>
	);
}
