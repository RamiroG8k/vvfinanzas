import OutlineCheckIcon from '@/assets/svg/outline-check-icon.svg';

import {
    BasicPlan,
    DebtPlan,
    SavingsPlan,
    StrategicPlan
} from '@/entities';

import Plan from '@/entities/Plan';

const PLANS: Plan[] = [new BasicPlan(), new SavingsPlan(), new DebtPlan(), new StrategicPlan()];

const Plans = (props: React.HTMLProps<HTMLElement>) => (
    <section className="rounded-t-[3rem] lg:rounded-t-[5rem] bg-white -translate-y-12 lg:-translate-y-20 py-20 lg:py-32 px-4">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-10 lg:gap-16">
            <div className="center gap-4 text-center leading-10">
                <h2 className="text-4xl lg:text-6xl font-medium uppercase">¡Escoge el plan para tí!</h2>

                <p className="font-light w-full leading-tight lg:max-w-80">
                    Conoce nuestros distintos planes para ver cuál se adapta mejor a tus necesidades
                    y así puedas comenzar con tu diagnóstico completamente gratuito.
                </p>
            </div>

            <div className="shadow-md flex gap-2 p-1 rounded-full bg-white w-fit">
                <button className="bg-accent rounded-full w-44 lg:w-60 py-1.5 font-medium" type="button">Planes</button>
                <button className="rounded-full w-44 lg:w-60 py-1.5" type="button">Seguimiento Mensual</button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {PLANS.map((plan) => (
                    <div key={plan.id} className="flex flex-col h-full w-full border border-content/15 rounded-2xl p-4 shadow-xl bg-white">
                        <h2 className="font-semibold bg-accent/50 w-fit px-5 py-1 rounded-md mb-2">{plan.name}</h2>
                        <p className="text-sm text-content/70 pb-4 lg:p-0 lg:h-24 leading-snug flex-shrink-0">{[plan.description]}.</p>

                        <div className="flex items-end pb-4">
                            <strong className="text-4xl font-medium">{plan.priceAsMoney}</strong>
                            <span className="text-sm text-content/70">/por plan</span>
                        </div>

                        <hr />

                        <div className="grid gap-2 h-72">
                            <ul className="space-y-2 py-4">
                                {plan.features.map((feature) => (
                                    <li className="leading-tight text-sm" key={feature}>
                                        <OutlineCheckIcon className="inline-block mr-1.5" />
                                        <span>{feature}.</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="border rounded-md border-content/30 h-10 w-full uppercase mt-auto font-semibold hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
                            Empezar ya
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Plans;
