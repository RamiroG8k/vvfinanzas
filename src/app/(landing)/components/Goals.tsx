'use client';

import { LegacyRef } from 'react';
import CashIcon from '@/assets/svg/cash-icon.svg';
import CoinsIcon from '@/assets/svg/coins-icon.svg';
import LikeIcon from '@/assets/svg/like-icon.svg';
import RightArrow from '@/assets/svg/right-arrow.svg';
import StonksIcon from '@/assets/svg/stonks-icon.svg';
import useCurrentContent from '@/hooks/useCurrentContent';

const INFO = [
    {
        title: 'Administración',
        description: 'Administrar, controlar y planificar de mejor manera los recursos financieros a través de distintas herramientas.',
        icon: CashIcon
    },
    {
        title: 'Ahorro',
        description: 'Maximizar y optimizar capacidad de ahorro mediante distintas estrategias de inversión.',
        icon: CoinsIcon
    },
    {
        title: 'Metas',
        description: 'Definir metas a corto, mediano y largo plazo siempre en búsqueda de estabilidad financiera.',
        icon: LikeIcon
    },
    {
        title: 'Hábitos',
        description: 'Desarrollar nuevos hábitos financieros que ayudarán a tomar mejores decisiones.',
        icon: StonksIcon
    }
];

const Goals = (props: React.HTMLProps<HTMLElement>) => {
    const [activeItem, ref] = useCurrentContent('div.snap-center') as [HTMLElement, LegacyRef<HTMLDivElement>];

    const activeItemTitle = activeItem?.getElementsByTagName('h3')[0]?.textContent;
    const indexOfActiveItem = `0${INFO.findIndex(({ title }) => title === activeItemTitle) + 1}`;

    return (
        <section className="flex flex-col gap-10 lg:gap-20 w-full" {...props}>
            <div className="text-center mx-auto w-fit grid gap-4 p-4 lg:p-0">
                <h2 className="text-4xl lg:text-6xl font-semibold">Objetivos</h2>

                <p className="text-lg max-w-xl font-light">
                    Adquirir conocimientos y herramientas que fortalezcan las habilidades financieras de las personas para mejorar la toma de decisiones en el manejo del dinero.
                </p>
            </div>

            <div ref={ref} className="w-full flex justify-start overflow-x-scroll px-4 py-8 gap-8 snap-x snap-mandatory">
                <div className="snap-start flex flex-col justify-between flex-shrink-0 h-60 lg:h-72 w-4 lg:w-[30rem]" />

                {INFO.map(({ title, description, icon: Icon }, i) => (
                    <div
                        key={title}
                        className={`snap-center flex flex-col justify-between flex-shrink-0 shadow-lg p-6 h-60 lg:h-72 w-80 lg:w-[30rem] rounded-2xl border ${i % 2 !== 0 ? 'bg-black text-white' : 'bg-zinc-100 text-black'}`}
                    >
                        <Icon className="size-16 lg:size-24" />

                        <div className={`grid gap-2 ${i % 2 !== 0 && 'text-yellow-200'}`}>
                            <h3 className="text-lg lg:text-xl font-semibold uppercase">{title}</h3>
                            <p className="text-sm lg:text-base leading-tight font-light max-w-80 text-md">{description}</p>
                        </div>
                    </div>
                ))}

                <div className="snap-start flex flex-col justify-between flex-shrink-0 h-60 lg:h-72 w-4 lg:w-[30rem]" />
            </div>

            <div className="max-w-screen-2xl w-full mx-auto flex justify-end items-center gap-4 px-4">
                <strong className="text-2xl lg:text-3xl font-semibold">{indexOfActiveItem}/04</strong>

                <RightArrow className="text-4xl" />
            </div>
        </section >
    );
};

export default Goals;
