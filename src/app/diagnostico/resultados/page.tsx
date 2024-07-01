'use client';

import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Diagnosis } from '@/entities';

const DiagnosisPage = () => {
    const [diagnosis, setDiagnosis] = useState<Diagnosis>();
    const params = useSearchParams();

    const data = params.get('data');

    if (!data) {
        redirect('/diagnostico');
    }

    const retrieveDiagnosis = async () => {
        const decodedDiagnosis = await Diagnosis.decode(data);

        setDiagnosis(decodedDiagnosis);
    };

    useEffect(() => {
        retrieveDiagnosis();
    }, []);

    return (
        <pre>
            {JSON.stringify(diagnosis, null, 4)}
        </pre>
    );
};

export default DiagnosisPage;
