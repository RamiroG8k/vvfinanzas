import emailjs from '@emailjs/browser';
import QRCode from 'qrcode';

import { useEffect } from 'react';
import { useProfile } from '@/context/profile';
import { clientEnv } from '@/env/schema.mjs';

const ScheduleAppointment = () => {
    const { profile } = useProfile();

    const sendData = async () => {
        const data = await profile?.toBase64();

        if (!data) return;

        const resultsURL = clientEnv.NEXT_PUBLIC_BASE_URL + '/diagnostico/resultados?data=' + data;

        const qrCode = await QRCode.toDataURL(resultsURL);

        await emailjs
            .send(clientEnv.NEXT_PUBLIC_SERVICE_ID, clientEnv.NEXT_PUBLIC_TEMPLATE_ID, {
                userName: 'Nuevo usuario',
                userEmail: 'userEmail@example.com',
                qrCode,
                resultsURL
            }, {
                publicKey: clientEnv.NEXT_PUBLIC_PUBLIC_KEY
            });
    };

    useEffect(() => {
        sendData();
    }, []);

    return (
        <div>
            <h2>Completado</h2>
        </div>
    );
};

export default ScheduleAppointment;
