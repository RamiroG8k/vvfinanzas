'use client';

import { useForm } from 'react-hook-form';
import { useProfile } from '@/context/profile';
import type { Balance } from '@/entities/diagnosis';

const BalanceForm = () => {
    const { update } = useProfile();
    const { handleSubmit, register } = useForm<Balance>({
        defaultValues: {
            amount: 1_000,
            interestRate: 1
        }
    });

    const onSubmit = (balance: Balance) => {
        update({ balance }, 'BALANCE');
    };

    return (
        <form id="diagnosisForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            <div className="flex items-center">
                <span className="size-4 bg-accent" />
                <h3 className="font-medium text-xl bg-white ml-5">Ahorro e inversion</h3>
            </div>

            <div className="flex flex-col lg:flex-row items-end gap-4">
                <div className="grid gap-1.5 w-full">
                    <label className="ml-1 font-medium">Cantidad ahorrada</label>

                    <input className="input" {...register('amount')} />
                </div>

                <div className="grid gap-1.5 w-full">
                    <label className="ml-1 font-medium">Tasa de inversion</label>
                    <input className="input" {...register('interestRate')} />
                </div>
            </div>
        </form>
    );
};

export default BalanceForm;
