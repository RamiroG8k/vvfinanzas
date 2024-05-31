import { MetadataRoute } from 'next';

import { clientEnv } from '@/env/schema.mjs';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/'
		},
		sitemap: `${clientEnv.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
	};
}
