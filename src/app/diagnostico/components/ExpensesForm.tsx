'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import TrashIcon from '@/assets/svg/trash-icon.svg';
import { useProfile } from '@/context/profile';
import Diagnosis, { AvailableExpenseCategory, type Expense } from '@/entities/diagnosis';

type FormValues = {
    home: Expense[];
    transport: Expense[];
    personal: Expense[];
    entertainment: Expense[];
};

const IncomesForm = () => {
    const { update } = useProfile();
    const { control, handleSubmit, register } = useForm<FormValues>({
        defaultValues: {
            home: [
                {
                    category: 'HOME',
                    source: 'Renta',
                    amount: 10_000,
                    type: 'FIXED'
                }
            ],
            transport: [
                {
                    category: 'TRANSPORTATION',
                    source: 'Gasolina',
                    amount: 100,
                    type: 'VARIABLE'
                }
            ],
            personal: [
                {
                    category: 'PERSONAL',
                    source: 'Ropa',
                    amount: 1_000,
                    type: 'VARIABLE'
                }
            ],
            entertainment: [
                {
                    category: 'ENTERTAINMENT',
                    source: 'Viajes',
                    amount: 10_000,
                    type: 'VARIABLE'
                }
            ]
        }
    });

    const { fields: homeFields, append: appendToHomeFields, remove: removeHomeField } = useFieldArray({
        control,
        name: 'home',
        rules: {
            required: true
        }
    });

    const { fields: transportFields, append: appendToTransportFields, remove: removeTransportField } = useFieldArray({
        control,
        name: 'transport',
        rules: {
            required: true
        }
    });

    const { fields: personalFields, append: appendToPersonalFields, remove: removePersonalField } = useFieldArray({
        control,
        name: 'personal',
        rules: {
            required: true
        }
    });

    const { fields: entertainmentFields, append: appendToEntertainmentFields, remove: removeEntertainmentField } = useFieldArray({
        control,
        name: 'entertainment',
        rules: {
            required: true
        }
    });

    const onSubmit = (formData: FormValues) => {
        const expenses = [
            ...formData.home,
            ...formData.transport,
            ...formData.personal,
            ...formData.entertainment
        ];

        update({ expenses }, 'EXPENSES');
    };

    const customFields = [
        {
            id: 'home',
            label: 'Gastos del hogar',
            fields: homeFields,
            appendToFields: appendToHomeFields,
            removeField: removeHomeField
        },
        {
            id: 'transport',
            label: 'Gastos de transporte',
            fields: transportFields,
            appendToFields: appendToTransportFields,
            removeField: removeTransportField
        },
        {
            id: 'personal',
            label: 'Gastos personales',
            fields: personalFields,
            appendToFields: appendToPersonalFields,
            removeField: removePersonalField
        },
        {
            id: 'entertainment',
            label: 'Entretenimiento',
            fields: entertainmentFields,
            appendToFields: appendToEntertainmentFields,
            removeField: removeEntertainmentField
        }
    ] as const;

    return (
        <form id="diagnosisForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            {customFields.map(({ id, label, fields, appendToFields, removeField }) => {
                const category = id.toUpperCase() as AvailableExpenseCategory;

                return (
                    <div className="div grid gap-4" key={id}>
                        <div className="flex items-center">
                            <span className="size-4 bg-accent" />
                            <h3 className="font-medium text-xl bg-white ml-5">{label}</h3>
                        </div>

                        {fields.map((field, index) => (
                            <div key={field.id} className="flex flex-col lg:flex-row items-end gap-4">
                                <div className="grid gap-1.5 w-full">
                                    <label className="ml-1 font-medium">Fuente del gasto</label>

                                    <input className="input" {...register(`${id}.${index}.source`)} defaultValue={field.source} />
                                </div>

                                <div className="grid gap-1.5 w-full">
                                    <label className="ml-1 font-medium">Cantidad</label>
                                    <input className="input" {...register(`${id}.${index}.amount`)} defaultValue={field.amount} />
                                </div>

                                <div className="grid gap-1.5 w-full">
                                    <label className="ml-1 font-medium">Tipo</label>
                                    <select className="input" {...register(`${id}.${index}.type`)} defaultValue={field.type}>
                                        <option value={undefined}>-- Seleccionar --</option>
                                        <option value="FIXED">Fijo</option>
                                        <option value="VARIABLE">Variable</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    className="button lg:p-0 center gap-2 lg:size-10 border flex-row lg:flex-col lg:aspect-square flex-shrink-0 w-full bg-red-50 border-red-200"
                                    title="Quitar"
                                    onClick={() => removeField(index)}
                                >
                                    <span className="lg:hidden">Quitar</span>

                                    <TrashIcon />
                                </button>
                            </div>
                        ))}

                        <button
                            className="button border border-green-200 bg-green-50"
                            type="button"
                            onClick={() => appendToFields({ category, source: 'Nombre del gasto', amount: 0, type: 'FIXED' })}
                        >
                            Nuevo gasto
                        </button>

                        <hr className="mt-8" />
                    </div>
                );
            })}
        </form >
    );
};

export default IncomesForm;
