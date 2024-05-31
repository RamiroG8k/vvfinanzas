import CheckIcon from '@/assets/svg/check-icon.svg';

import {
    BasicPlan,
    DebtPlan,
    SavingsPlan,
    StrategicPlan
} from '@/entities';

import Plan from '@/entities/Plan';

export default function PlansPage() {
    const plans: Plan[] = [new BasicPlan(), new SavingsPlan(), new StrategicPlan(), new DebtPlan()];

    return (
        <div className="h-auto w-full p-4 lg:p-8 pb-20 bg-background">
            <main className="center gap-4 lg:gap-8 text-center leading-10 h-60">
                <h1 className="uppercase font-semibold text-xl lg:text-3xl">Tipos de Planes</h1>
                <p className="font-light w-full leading-tight">
                    Conoce nuestros distintos planes para ver cual se adapta mejor a tus necesidades.
                </p>
            </main>

            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {plans.map((plan) => (
                    <div key={plan.id} className="flex flex-col h-full w-full border border-content/20 rounded-xl p-4 shadow-md bg-white pb-8">
                        <h2 className="font-semibold h-8 text-lg">{plan.name}</h2>
                        <p className="text-content/70 pb-4 lg:p-0 lg:h-20 leading-snug flex-shrink-0">{[plan.description]}</p>

                        <strong className="text-4xl pb-4">{plan.priceAsMoney}</strong>

                        <div className="grid gap-2">
                            <p className="font-medium mt-4">¿Qué herramientas incluye?</p>
                            <ul className="space-y-2">
                                {plan.features.map((feature) => (
                                    <li className="leading-tight text-sm" key={feature}>
                                        <CheckIcon className="inline-block mr-1.5 text-content/60" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="font-medium mt-4">Seguimiento mensual</p>
                            <ul className="space-y-2">
                                {plan.benefits.map((benefit) => (
                                    <li className="leading-tight text-sm" key={benefit}>
                                        <CheckIcon className="inline-block mr-1.5 text-content/60" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
