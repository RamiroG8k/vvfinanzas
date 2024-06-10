import Plan from './Plan';

class BasicPlan extends Plan {
    constructor() {
        super({
            name: 'Básico',
            description: 'Desarrollo de un presupuesto mensual para aterrizar, conocer y administrar mis recursos financieros',
            goals: [
                'Aterrizar y conocer mi punto do partida',
                'Administración de mis recursos financieros',
                'Clasificación de gastos para mejor control'
            ],
            features: [
                'Plantillas para control mensual'
            ],
            benefits: [
                'Realizar ajustes en cualquier momento',
                'Monitoreo del uso de las plantillas',
                'Buscar opciones de ahorro'
            ],
            price: 800_00
        });
    }
}

export default BasicPlan;
