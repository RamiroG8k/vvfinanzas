import Image from 'next/image';
import CalendarIcon from '@/assets/svg/calendar-icon.svg';
import DataBaseIcon from '@/assets/svg/database-icon.svg';
import GraphIcon from '@/assets/svg/graph-icon.svg';
import PersonIcon from '@/assets/svg/person-icon.svg';

const INFO = [
    {
        title: 'Diagnóstico financiero',
        description: 'Elaboración de un diagnóstico financiero principalmente para conocer el punto de partida y poder aterrizar los números',
        icon: GraphIcon
    },
    {
        title: 'Plan financiero',
        description: 'Desarrollo de un plan financiero personalizado proyectado a un año en relación con el resultado del diagnóstico',
        icon: CalendarIcon
    },
    {
        title: 'Análisis personalizado',
        description: 'Análisis de la situación actual para detectar necesidades y a su vez encontrar nuevas oportunidades de mejora',
        icon: PersonIcon
    },
    {
        title: 'Educación financiera',
        description: 'Recomendaciones y estrategias de mejora para optimizar el ahorro y lograr las metas financieras definidas',
        icon: DataBaseIcon
    }
];

const Services = ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <section className={`flex justify-between gap-32 max-w-screen-2xl mx-auto ${className}`} {...props}>
        <div className="flex flex-col gap-24 w-3/5">
            <h2 className="text-4xl lg:text-6xl font-semibold col-span-2">Servicios</h2>

            <div className="grid grid-cols-2 gap-16">
                {INFO.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="grid h-40 gap-4">
                        <Icon className="size-10 rounded-full border p-2 overflow-visible shadow-md" />

                        <h3 className="text-xl font-semibold">{title}</h3>

                        <p className="text-content/70 leading-snug">{description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-2/5 bg-accent/10 center rounded-3xl">
            <Image
                src="/img/iphone-mockup.png"
                alt="iPhone mockup"
                width={470}
                height={628}
            />
        </div>
    </section>
);

export default Services;
