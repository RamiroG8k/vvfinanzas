import Plan from './Plan';

class SavingsPlan extends Plan {
    constructor() {
        super({
            name: 'De ahorro',
            description: 'Desarrollo de un plan de ahorro personalizado a un año para lograr metas financieras y crear hábitos de ahorro',
            goals: [
                'Desarrollar nuevos hábitos de ahorro',
                'Planificar un ahorro de emergencias',
                'Definir y lograr metas financieras'
            ],
            features: [
                'Plantillas para control mensual',
                'Plantillas para definir metas de ahorro',
                'Flujo anual proyectado con ahorro',
                'Reporte anual del ejercicio'
            ],
            benefits: [
                'Plan detallado para alcanzar metas financieras a largo plazo',
                'Ayuda a desarrollar nuevos hábitos de ahorro',
                'Permite planificar para emergencias'
            ],
            price: 1_250_00
        });
    }
}

export default SavingsPlan;
