'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import TrashIcon from '@/assets/svg/trash-icon.svg';
import { useProfile } from '@/context/profile';
import type { Debt } from '@/entities/diagnosis';

type FormValues = {
    debts: Debt[];
};

const DebtsForm = () => {
    const { update } = useProfile();
    const { control, handleSubmit, register } = useForm<FormValues>({
        defaultValues: {
            debts: [
                {
                    source: 'Hipoteca',
                    amount: 10_000
                }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'debts',
        rules: {
            required: true
        }
    });

    const onSubmit = (formData: FormValues) => {
        const { debts } = formData;

        update({ debts }, 'DEBTS');
    };

    return (
        <form id="diagnosisForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            <div className="div grid gap-4">
                <div className="flex items-center">
                    <span className="size-4 bg-accent" />
                    <h3 className="font-medium text-xl bg-white ml-5">Deudas o créditos</h3>
                </div>

                {fields.map((field, index) => (
                    <div key={field.id} className="flex flex-col lg:flex-row items-end gap-4">
                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Fuente de la deuda</label>

                            <input className="input" {...register(`debts.${index}.source`)} defaultValue={field.source} />
                        </div>

                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Cantidad</label>
                            <input className="input" {...register(`debts.${index}.amount`)} defaultValue={field.amount} />
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
                ))}

                <button
                    className="button border border-green-200 bg-green-50"
                    type="button"
                    onClick={() => append({ source: 'Nueva deuda', amount: 0 })}
                >
                    Nueva deuda
                </button>
            </div>
        </form>
    );
};

export default DebtsForm;
