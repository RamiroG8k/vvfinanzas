'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import TrashIcon from '@/assets/svg/trash-icon.svg';
import { useProfile } from '@/context/profile';
import type { CreditCard } from '@/entities/diagnosis';

type FormValues = {
    creditCards: CreditCard[];
};

const DebtsForm = () => {
    const { update } = useProfile();
    const { control, handleSubmit, register } = useForm<FormValues>({
        defaultValues: {
            creditCards: [
                {
                    granted: 10_000,
                    available: 5_000,
                    used: 5_000,
                    toPay: 1_500,
                    cutOffDate: '2023-05-01',
                    payOffDate: '2023-06-01',
                    interestRate: 0.85
                }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'creditCards',
        rules: {
            required: true
        }
    });

    const onSubmit = (formData: FormValues) => {
        const { creditCards } = formData;

        update({ creditCards }, 'CREDIT_CARDS');
    };

    return (
        <form id="diagnosisForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            <div className="div grid gap-4">
                <div className="flex items-center">
                    <span className="size-4 bg-accent" />
                    <h3 className="font-medium text-xl bg-white ml-5">Tarjetas de crédito</h3>
                </div>

                {fields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-4">
                        <div className="flex flex-col lg:flex-row gap-4 items-end w-full">
                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">Crédito otorgado</label>
                                <input className="input" {...register(`creditCards.${index}.granted`)} defaultValue={field.granted} />
                            </div>

                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">Disponible</label>
                                <input className="input" {...register(`creditCards.${index}.available`)} defaultValue={field.available} />
                            </div>

                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">A pagar</label>
                                <input className="input" {...register(`creditCards.${index}.toPay`)} defaultValue={field.toPay} />
                            </div>

                            <button
                                type="button"
                                className="button lg:p-0 center gap-2 lg:size-10 border flex-row lg:flex-col lg:aspect-square flex-shrink-0 w-full bg-red-50 border-red-200"
                                title="Quitar"
                                onClick={() => remove(index)}
                            >
                                <span className="lg:hidden">Quitar</span>

                                <TrashIcon />
                            </button>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">Fecha de corte</label>
                                <input className="input" type="date" {...register(`creditCards.${index}.cutOffDate`)} defaultValue={field.cutOffDate} />
                            </div>

                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">Fecha limite de pago</label>
                                <input className="input" type="date" {...register(`creditCards.${index}.payOffDate`)} defaultValue={field.payOffDate} />
                            </div>

                            <div className="grid gap-1.5 w-1/3">
                                <label className="ml-1 font-medium">Tasa de intereses</label>
                                <input className="input" {...register(`creditCards.${index}.interestRate`)} defaultValue={field.interestRate} />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className="button border border-green-200 bg-green-50"
                    type="button"
                    onClick={() => append({} as CreditCard)}
                >
                    Nueva tarjeta
                </button>
            </div>
        </form>
    );
};

export default DebtsForm;
