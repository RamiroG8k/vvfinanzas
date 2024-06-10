import Plan from './Plan';

class DebtPlan extends Plan {
    constructor() {
        super({
            name: 'Deuda',
            description: 'Desarrollo de un plan personalizado para liquidar deudas y crear estrategias para poder ahorrar',
            goals: [
                'Crear estrategias de abonos mensuales',
                'Priorizar deudas para pagar menos intereses',
                'Liquidar las deudas para poder ahorrar'
            ],
            features: [
                'Plantilla para control mensual de deudas',
                'Plantilla para control de tarjetas de crédito'
            ],
            benefits: [
                'Reducir el pago de intereses por deudas',
                'Salir de deudas en un plazo determinado',
                'Mejorar su salud financiera'
            ],
            price: 1_500_00
        });
    }
}

export default DebtPlan;
