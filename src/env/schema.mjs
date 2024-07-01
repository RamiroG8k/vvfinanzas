import { z } from 'zod';

export const serverSchema = z.object({
	NODE_ENV: z.enum(['development', 'production']).default('development')
});

export const clientSchema = z.object({
	NEXT_PUBLIC_BASE_URL: z.string().url(),
	NEXT_PUBLIC_SERVICE_ID: z.string(),
	NEXT_PUBLIC_TEMPLATE_ID: z.string(),
	NEXT_PUBLIC_PUBLIC_KEY: z.string()
});

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] }}
 */
export const clientEnv = {
	NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
	NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
	NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY
};
