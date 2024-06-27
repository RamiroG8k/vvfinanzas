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
        <div className="min-h-screen lg:py-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
            <aside className="flex flex-row p-2 lg:p-4 gap-4 lg:flex-col lg:h-full lg:w-1/4 sticky top-0 bg-white">
                <div className="hidden lg:grid">
                    <p className="text-lg font-semibold">Paso 1</p>
                    <span className="text-sm text-content/80">Por favor introduce tu información personal</span>
                </div>

                <hr className="hidden lg:block" />

                <div className="flex overflow-scroll gap-12 lg:gap-4 lg:grid lg:h-full w-fit mx-auto">
                    {Object.entries(Steps).map(([key, value]) => {
                        const Icon = ICONS[key as keyof typeof Steps];

                        return (
                            <div className="flex h-fit lg:min-h-20 items-center justify-end gap-4" key={key}>
                                <p className="text-lg font-medium whitespace-nowrap">{value}</p>

                                <Icon className="bg-accent/50 text-4xl lg:text-5xl rounded-full p-2 overflow-visible" />
                            </div>
                        );
                    })}
                </div>
            </aside>

            <hr className="hidden lg:block h-full w-px min-h-96 bg-gray-200" />

            <section className="flex flex-col gap-8 h-full lg:w-3/4">
                {children}

                <div className="fixed bottom-0 left-0 w-full p-4 lg:p-0 lg:w-auto bg-white lg:static lg:self-end shadow-[0_0_1rem_0_rgba(0,0,0,0.1)] lg:shadow-none z-50">
                    <button
                        type="submit"
                        className="bg-accent/40 font-semibold px-8 py-2 rounded-lg border border-accent/60 shadow-md w-full"
                    >
                        Siguiente
                    </button>
                </div>
            </section>
        </div>
    );
}
