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

			<Services id="services" className="lg:py-10" />

			<OurTools id="about" className="pb-40 lg:pb-48" />

			<Plans id="plans" />

			<Contact id="contact" className="pb-32" />
		</Fragment>
	);
}
