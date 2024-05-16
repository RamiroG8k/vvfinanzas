import { MetadataRoute } from 'next';
import { clientEnv } from '@/env/schema.mjs';

type Route = {
    url: string;
    lastModified: string;
};

const baseUrl = clientEnv.NEXT_PUBLIC_BASE_URL
  ? `https://${clientEnv.NEXT_PUBLIC_BASE_URL}`
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routesMap = [''].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    return [...routesMap];
}
