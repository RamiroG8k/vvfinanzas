import Plan from './Plan';

class StrategicPlan extends Plan {
    constructor() {
        super({
            name: 'Estratégico',
            description: 'Desarrollo de un plan de acción personalizado con estrategia de inversión y retiro',
            goals: [
                'Educación financiera en temas de inversión y retiro',
                'Planificar metas a corto, mediano y largo plazo en búsqueda de la libertad financiera'
            ],
            features: [
                'Plantilla para definir metas de ahorro enfocadas en inversión a corto, mediano y largo plazo',
                'Plantilla para el control de las inversiones a corto plazo',
                'Flujo anual proyectado con ahorro e inversiones',
                'Plantillas mensuales para control y clasificación de ingresos y gastos',
                'Reporte anual del ejercicio',
                'Acompañamiento, gestión y asesoría personalizada'
            ],
            benefits: [
                'Plan integral para alcanzar metas financieras a corto, mediano y largo plazo',
                'Preparación para la jubilación y la libertad financiera',
                'Asesoría personalizada para inversiones'
            ],
            price: 249_99
        });
    }
}

export default StrategicPlan;
