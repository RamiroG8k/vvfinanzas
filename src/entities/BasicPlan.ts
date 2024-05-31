import Plan from './Plan';

class BasicPlan extends Plan {
    constructor() {
        super({
            name: 'Básico',
            description: 'Desarrollo de un presupuesto mensual',
            goals: [
                'Aterrizar y conocer mi punto do partida',
                'Administración de mis recursos financieros',
                'Clasificación de gastos para mejor control'
            ],
            features: [
                'Plantillas mensuales para control y clasificación de ingresos y gastos'
            ],
            benefits: [
                'Realizar ajustes en cualquier momento',
                'Monitoreo del uso de las plantillas',
                'Buscar opciones de ahorro'
            ],
            price: 100_00
        });
    }
}

export default BasicPlan;
