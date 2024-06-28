'use client';

import { useProfile } from '@/context/profile';

const DiagnosisStepper = () => {
    const { goToPreviousStep, step } = useProfile();

    const isFirstStep = (step === 'INCOMES');

    return (
        <div className="fixed flex gap-4 bottom-0 left-0 w-full p-4 lg:p-0 lg:w-auto bg-white lg:static lg:self-end shadow-[0_0_1rem_0_rgba(0,0,0,0.1)] lg:shadow-none z-50">
            {!isFirstStep && (
                <button
                    className="button bg-content/5 border shadow-md w-full"
                    onClick={goToPreviousStep}
                    type="button"
                >
                    Anterior
                </button>
            )}

            <button
                className="button bg-accent/40 border border-accent/60 shadow-md w-full"
                form="diagnosisForm"
                type="submit"
            >
                Siguiente
            </button>
        </div>
    );
};

export default DiagnosisStepper;
