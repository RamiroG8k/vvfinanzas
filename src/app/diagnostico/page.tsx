'use client';

import { useProfile } from '@/context/profile';

import CreditCardsForm from './components/CreditCardsForm';
import DebtsForm from './components/DebtsForm';
import ExpensesForm from './components/ExpensesForm';
import IncomesForm from './components/IncomesForm';

export default function DiagnosisPage() {
    const { step } = useProfile();

    const CurrentStep = () => {
        switch (step) {
            case 'INCOMES':
                return <IncomesForm />;
            case 'EXPENSES':
                return <ExpensesForm />;
            case 'DEBTS':
                return <DebtsForm />;
            case 'CREDIT_CARDS':
                return <CreditCardsForm />;
            case 'BALANCE':
                // return <BalanceForm />;
            default:
                return null;
        }
    };

    return (
        <main className="flex flex-col gap-4 lg:gap-8 h-full pb-20 lg:p-0">
            <div className="grid">
                <h2 className="text-2xl font-semibold">Diagnostico</h2>
                <p className="text-content/80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit consequatur. Earum alias, fugit
                </p>
            </div>

            <hr className="w-64" />

            <CurrentStep />
        </main>
    );
};
