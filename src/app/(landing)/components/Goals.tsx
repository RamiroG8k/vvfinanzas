import CashIcon from '@/assets/svg/cash-icon.svg';
import CoinsIcon from '@/assets/svg/coins-icon.svg';
import LikeIcon from '@/assets/svg/like-icon.svg';
import RightArrow from '@/assets/svg/right-arrow.svg';
import StonksIcon from '@/assets/svg/stonks-icon.svg';

const INFO = [
    {
        title: 'Administrar',
        description: 'Administrar, controlar y planificar de mejor manera los recursos financieros a través de distintas herramientas',
        icon: CashIcon
    },
    {
        title: 'Maximizar',
        description: 'Maximizar y optimizar capacidad de ahorro mediante una estrategia de inversión',
        icon: CoinsIcon
    },
    {
        title: 'Metas',
        description: 'Definir metas a corto, mediano y largo plazo siempre en búsqueda de estabilidad financiera',
        icon: LikeIcon
    },
    {
        title: 'Hábitos',
        description: 'Crear nuevos hábitos para mejorar la toma de decisiones',
        icon: StonksIcon
    }
];

const Goals = (props: React.HTMLProps<HTMLElement>) => (
    <section className="grid gap-20 w-full overflow-hidden p-4 lg:p-0" {...props}>
        <div className="text-center mx-auto w-fit grid gap-4">
            <h2 className="text-4xl lg:text-6xl font-semibold">Objetivos</h2>

            <p className="text-lg max-w-xl font-light">
                VV Finanzas nace con la idea de transformar la mentalidad de las personas en educación financiera de una manera amigable
            </p>
        </div>

        <div className="max-w-screen-2xl ml-auto grid gap-8">
            <div className="flex justify-center gap-8">
                {INFO.map(({ title, description, icon: Icon }, i) => (
                    <div
                        key={title}
                        className={`flex flex-col justify-between flex-shrink-0 shadow-lg p-6 h-72 w-[30rem] rounded-2xl border ${i % 2 !== 0 ? 'bg-black text-white' : 'bg-zinc-100 text-black'}`}
                    >
                        <Icon />

                        <div className={`grid gap-2 ${i % 2 !== 0 && 'text-yellow-200'}`}>
                            <h3 className="text-xl font-semibold uppercase">{title}</h3>
                            <p className="leading-tight font-light max-w-80 text-md">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-screen-2xl w-full mx-auto flex justify-end items-center gap-4">
            <strong className="text-3xl font-semibold">02/04</strong>

            <RightArrow className="text-4xl" />
        </div>
    </section>
);

export default Goals;
