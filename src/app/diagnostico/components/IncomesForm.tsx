'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import TrashIcon from '@/assets/svg/trash-icon.svg';
import { useProfile } from '@/context/profile';
import type { Income } from '@/entities/diagnosis';

type FormValues = {
    fixed: Income[];
    variable: Income[];
};

const IncomesForm = () => {
    const { update } = useProfile();
    const { control, handleSubmit, register } = useForm<FormValues>({
        defaultValues: {
            fixed: [
                {
                    source: 'Sueldo',
                    amount: 10_000,
                    type: 'FIXED'
                }
            ],
            variable: [
                {
                    source: 'Ingreso extra',
                    amount: 1_000,
                    type: 'VARIABLE'
                }
            ]
        }
    });

    const { fields: fixedFields, append: appendToFixedFields, remove: removeFixedField } = useFieldArray({
        control,
        name: 'fixed',
        rules: {
            required: true
        }
    });

    const { fields: variableFields, append: appendToVariableFields, remove: removeVariableField } = useFieldArray({
        control,
        name: 'variable',
        rules: {
            required: true
        }
    });

    const onSubmit = (formData: FormValues) => {
        const incomes = [...formData.fixed, ...formData.variable];

        update({ incomes }, 'INCOMES');
    };

    return (
        <form id="diagnosisForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            <div className="div grid gap-4">
                <div className="flex items-center">
                    <span className="size-4 bg-accent" />
                    <h3 className="font-medium text-xl bg-white ml-5">Ingresos fijos</h3>
                </div>

                {fixedFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col lg:flex-row items-end gap-4">
                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Fuente de ingreso</label>

                            <input className="input" {...register(`fixed.${index}.source`)} defaultValue={field.source} />
                        </div>

                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Cantidad</label>
                            <input className="input" {...register(`fixed.${index}.amount`)} defaultValue={field.amount} />
                        </div>

                        <button
                            type="button"
                            className="button lg:p-0 center gap-2 lg:size-10 border flex-row lg:flex-col lg:aspect-square flex-shrink-0 w-full bg-red-50 border-red-200"
                            title="Quitar"
                            onClick={() => removeFixedField(index)}
                        >
                            <span className="lg:hidden">Quitar</span>

                            <TrashIcon />
                        </button>
                    </div>
                ))}

                <button
                    className="button border border-green-200 bg-green-50"
                    type="button"
                    onClick={() => appendToFixedFields({ source: 'Ingreso extra', amount: 0, type: 'FIXED' })}
                >
                    Nuevo ingreso fijo
                </button>
            </div>

            <hr className="" />

            <div className="div grid gap-4">
                <div className="flex items-center">
                    <span className="size-4 bg-accent" />
                    <h3 className="font-medium text-xl bg-white ml-5">Ingresos variables</h3>
                </div>

                {variableFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col lg:flex-row items-end gap-4">
                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Fuente de ingreso</label>

                            <input className="input" {...register(`variable.${index}.source`)} defaultValue={field.source} />
                        </div>

                        <div className="grid gap-1.5 w-full">
                            <label className="ml-1 font-medium">Cantidad</label>
                            <input className="input" {...register(`variable.${index}.amount`)} defaultValue={field.amount} />
                        </div>

                        <button
                            type="button"
                            className="button lg:p-0 center gap-2 lg:size-10 border flex-row lg:flex-col lg:aspect-square flex-shrink-0 w-full bg-red-50 border-red-200"
                            title="Quitar"
                            onClick={() => removeVariableField(index)}
                        >
                            <span className="lg:hidden">Quitar</span>

                            <TrashIcon />
                        </button>
                    </div>
                ))}

                <button
                    className="button border border-green-200 bg-green-50"
                    onClick={() => appendToVariableFields({ source: 'Ingreso extra', amount: 0, type: 'VARIABLE' })}
                    type="button"
                >
                    Nuevo ingreso variable
                </button>
            </div>
        </form>
    );
};

export default IncomesForm;
