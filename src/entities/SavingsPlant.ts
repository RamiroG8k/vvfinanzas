import Plan from './Plan';

class SavingsPlan extends Plan {
    constructor() {
        super({
            name: 'De ahorro',
            description: 'Desarrollo de un plan de ahorro personalizado a un año',
            goals: [
                'Desarrollar nuevos hábitos de ahorro',
                'Planificar un ahorro de emergencias',
                'Definir y lograr metas financieras'
            ],
            features: [
                'Plantilla para definir metas de ahorro',
                'Flujo anual proyectado con ahorro',
                'Plantillas mensuales para control y clasificación de ingresos y gastos',
                'Reporte anual del ejercicio'
            ],
            benefits: [
                'Plan detallado para alcanzar metas financieras a largo plazo',
                'Ayuda a desarrollar nuevos hábitos de ahorro',
                'Permite planificar para emergencias'
            ],
            price: 150_00
        });
    }
}

export default SavingsPlan;
