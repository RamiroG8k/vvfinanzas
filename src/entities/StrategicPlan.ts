import Plan from './Plan';

class StrategicPlan extends Plan {
    constructor() {
        super({
            name: 'Estratégico',
            description: 'Desarrollo de un plan de acción personalizado con estrategia de inversión y retiro para lograr la libertad financiera',
            goals: [
                'Educación financiera en temas de inversión y retiro',
                'Planificar metas a corto, mediano y largo plazo en búsqueda de la libertad financiera'
            ],
            features: [
                'Plantillas para control mensual',
                'Plantillas para definir metas de ahorro',
                'Plantillas para el control de las inversiones',
                'Flujo anual proyectado con ahorro e inversiones',
                'Reporte anual del ejercicio'
            ],
            benefits: [
                'Plan integral para alcanzar metas financieras a corto, mediano y largo plazo',
                'Preparación para la jubilación y la libertad financiera',
                'Asesoría personalizada para inversiones'
            ],
            price: 2_000_00
        });
    }
}

export default StrategicPlan;
