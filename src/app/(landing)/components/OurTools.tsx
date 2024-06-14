
import Image from 'next/image';

const INFO = [
    {
        title: 'Presupuesto Proyectado',
        description: 'Ayudar a los clientes a que aterricen sus números mediante el desarrollo de un presupuesto personalizado a un año, el cual refleje sus metas financieras'
    },
    {
        title: 'Herramientas para control mensual',
        description: 'Elaboración de un diagnóstico financiero principalmente para conocer el punto de partida y poder aterrizar los números'
    },
    {
        title: 'Dashboard para control mensual',
        description: 'Elaboración de un diagnóstico financiero principalmente para conocer el punto de partida y poder aterrizar los números'
    }
];

const OurTools = ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <section className={`bg-black text-white px-4 py-20 lg:py-32 rounded-t-[3rem] lg:rounded-t-[5rem] ${className}`} {...props}>
        <div className="max-w-screen-2xl mx-auto flex flex-col">
            <div className="center text-center">
                <h2 className="text-3xl lg:text-5xl">Herramientas útiles</h2>
                <span className="text-4xl lg:text-6xl font-medium">Más simple, imposible</span>
            </div>

            <Image
                src="/img/devices-mockup.png"
                alt="Mockup de dispositivos"
                width={1862}
                height={1242}
            />

            <div className="flex flex-col lg:flex-row justify-center gap-16">
                {INFO.map(({ title, description }, i) => (
                    <div className="center flex-col gap-2 text-center w-96" key={title}>
                        <span className="aspect-square p-3 text-xl font-medium rounded-full w-fit bg-white text-black">0{i + 1}</span>

                        <h3 className="text-lg font-medium">{title}</h3>

                        <p className="font-extralight text-background/70 leading-tight text-sm">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default OurTools;
