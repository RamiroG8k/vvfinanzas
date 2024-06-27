import CreditCardIcon from '@/assets/svg/card-icon.svg';
import DebtsIcon from '@/assets/svg/debt-icon.svg';
import ExpensesIcon from '@/assets/svg/expenses-icon.svg';
import IncomesIcon from '@/assets/svg/incomes-icon.svg';
import SavingsIcon from '@/assets/svg/savings-icon.svg';
import { clientEnv } from '@/env/schema.mjs';

import type { LayoutProps } from '@/types';
import { Steps } from './types';
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

export default function RootLayout({ children }: LayoutProps) {
    const ICONS: Record<keyof typeof Steps, any> = {
        INCOMES: IncomesIcon,
        EXPENSES: ExpensesIcon,
        DEBTS: DebtsIcon,
        CREDIT_CARDS: CreditCardIcon,
        BALANCE: SavingsIcon
    };

    return (
        <div className="min-h-[70svh] max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
            <aside className="flex flex-row p-4 gap-4 lg:flex-col h-full lg:w-1/4 border sticky top-0 bg-white">
                <div className="grid">
                    <p className="text-lg font-semibold">Paso 1</p>
                    <span className="text-sm text-content/80">Por favor introduce tu información personal</span>
                </div>

                <hr />

                <div className="grid h-full w-fit mx-auto">
                    {Object.entries(Steps).map(([key, value]) => {
                        const Icon = ICONS[key as keyof typeof Steps];

                        return (
                            <div className="flex min-h-20 items-center justify-end gap-4" key={key}>
                                <p className="text-lg font-medium">{value}</p>

                                <Icon className="bg-accent/50 text-5xl rounded-full aspect-square p-2 overflow-visible" />
                            </div>
                        );
                    })}
                </div>
            </aside>

            <hr className="hidden lg:block h-full w-px min-h-96 bg-gray-200" />

            <section className="h-full lg:w-3/4 border">
                {children}

                <button>Next</button>
            </section>
        </div>
    );
}
