import { MetadataRoute } from 'next';
import { clientEnv } from '@/env/schema.mjs';

const baseUrl = clientEnv.NEXT_PUBLIC_BASE_URL
  ? clientEnv.NEXT_PUBLIC_BASE_URL
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routesMap = ['', '/diagnostico', '/planes'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFreq: 'monthly',
        priority: 1
    }));

    return [...routesMap];
}
