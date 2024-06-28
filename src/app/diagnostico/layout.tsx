import { clientEnv } from '@/env/schema.mjs';

import type { LayoutProps } from '@/types';
import DiagnosisStepper from './components/DiagnosisStepper';
import StepProgress from './components/StepProgress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Diagnostico',
    description: 'Finanzas personales',
    keywords: ['Finanzas', 'Crédito', 'Ahorro'],
    metadataBase: new URL(clientEnv.NEXT_PUBLIC_BASE_URL),
    openGraph: {
        type: 'website'
    }
};

export default function DiagnosisLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen lg:py-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
            <aside className="flex flex-row py-2 lg:p-4 gap-4 lg:flex-col lg:h-full lg:w-1/4 sticky top-0 bg-white">
                <div className="hidden lg:grid">
                    <p className="text-lg font-semibold">Paso 1</p>
                    <span className="text-sm text-content/80">Por favor introduce tu información personal</span>
                </div>

                <hr className="hidden lg:block" />

                <StepProgress />
            </aside>

            <hr className="hidden lg:block h-full w-px min-h-96 bg-gray-200" />

            <section className="flex flex-col gap-8 h-full lg:w-3/4">
                {children}

                <DiagnosisStepper />
            </section>
        </div>
    );
};
