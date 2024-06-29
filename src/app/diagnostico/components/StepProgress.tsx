'use client';

import CreditCardIcon from '@/assets/svg/card-icon.svg';
import CheckIcon from '@/assets/svg/check-outline-icon.svg';
import DebtsIcon from '@/assets/svg/debt-icon.svg';
import ExpensesIcon from '@/assets/svg/expenses-icon.svg';
import IncomesIcon from '@/assets/svg/incomes-icon.svg';
import SavingsIcon from '@/assets/svg/savings-icon.svg';

import { useProfile } from '@/context/profile';
import { Steps } from '@/entities/diagnosis';

import { cn } from '@/lib';

const StepProgress = () => {
    const { step } = useProfile();

    const ICONS: Record<keyof typeof Steps, any> = {
        INCOMES: IncomesIcon,
        EXPENSES: ExpensesIcon,
        DEBTS: DebtsIcon,
        CREDIT_CARDS: CreditCardIcon,
        BALANCE: SavingsIcon,
        COMPLETED: CheckIcon
    };

    const availableSteps = Object.entries(Steps).filter(([key]) => key !== 'COMPLETED');

    return (
        <div className="flex overflow-scroll gap-12 lg:gap-4 lg:grid lg:h-full w-fit mx-auto">
            {availableSteps.map(([key, value]) => {
                const Icon = ICONS[key as keyof typeof Steps];

                const isActive = step === key;

                return (
                    <div className="flex h-fit lg:min-h-20 items-center justify-end gap-4" key={key}>
                        <p
                            className={cn(
                                'text-lg whitespace-nowrap text-content/70',
                                isActive && 'font-medium text-content'
                            )}
                        >
                            {value}
                        </p>

                        <Icon
                            className={cn(
                                'text-4xl lg:text-5xl rounded-full p-2 overflow-visible bg-content/10 text-gray-500',
                                isActive && 'bg-accent/50 text-content'
                            )}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StepProgress;
