import Image from 'next/image';
import CalendarIcon from '@/assets/svg/calendar-icon.svg';
import DataBaseIcon from '@/assets/svg/database-icon.svg';
import GraphIcon from '@/assets/svg/graph-icon.svg';
import PersonIcon from '@/assets/svg/person-icon.svg';

const INFO = [
    {
        title: 'Diagnóstico financiero',
        description: 'Elaboración de un diagnóstico financiero para aterrizar los números y así poder determinar el punto de partida.',
        icon: GraphIcon
    },
    {
        title: 'Plan financiero',
        description: 'Desarrollo de un plan financiero personalizado y proyectado a un año que mostrará la estrategia a seguir para el cumplimiento de las metas establecidas.',
        icon: CalendarIcon
    },
    {
        title: 'Análisis e identificación de problemas y oportunidades',
        description: 'Análisis de la situación actual para detectar cuales son los problemas para solucionar y las oportunidades a aprovechar.',
        icon: PersonIcon
    },
    {
        title: 'Seguimiento y control',
        description: 'Monitoreo y ajustes mensuales al plan con el objetivo de cumplir mes a mes lo proyectado.',
        icon: DataBaseIcon
    }
];

const Services = ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <section className={`flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 max-w-screen-2xl p-4 mx-auto ${className}`} {...props}>
        <div className="flex flex-col gap-8 lg:gap-24 lg:w-3/5">
            <h2 className="text-4xl lg:text-6xl font-semibold col-span-2">Servicios</h2>

            <div className="grid grid-cols-2 gap-4 lg:gap-16">
                {INFO.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="grid lg:h-40 gap-4">
                        <Icon className="size-10 rounded-full border p-2 overflow-visible shadow-md" />

                        <h3 className="text-xl font-semibold uppercase">{title}</h3>

                        <p className="text-content/70 leading-snug">{description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:w-2/5 bg-accent/10 center rounded-3xl">
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
