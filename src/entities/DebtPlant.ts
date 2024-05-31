import Plan from './Plan';

class DebtPlan extends Plan {
    constructor() {
        super({
            name: 'De deuda',
            description: 'Desarrollo de un plan personalizado para liquidar deudas',
            goals: [
                'Crear estrategias de abonos mensuales',
                'Priorizar deudas para pagar menos intereses',
                'Liquidar las deudas para poder ahorrar'
            ],
            features: [
                'Plantilla para determinar las mensualidades de cada deuda',
                'Plantilla para control de tarjetas de crédito'
            ],
            benefits: [
                'Reducir el pago de intereses por deudas',
                'Salir de deudas en un plazo determinado',
                'Mejorar su salud financiera'
            ],
            price: 200_00
        });
    }
}

export default DebtPlan;
