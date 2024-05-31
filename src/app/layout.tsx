import { clientEnv } from '@/env/schema.mjs';
import { inter } from '@/fonts';

import type { LayoutProps } from '@/types';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'VVFinanzas',
		template: 'VVFinanzas | %s'
	},
	description: 'Finanzas personales',
	keywords: ['Finanzas', 'Crédito', 'Ahorro'],
	metadataBase: new URL(clientEnv.NEXT_PUBLIC_BASE_URL),
	openGraph: {
		type: 'website'
	}
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="es">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
