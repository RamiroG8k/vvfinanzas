import Image from 'next/image';
import Link from 'next/link';

import EmailIcon from '@/assets/svg/email-icon.svg';
import PhoneIcon from '@/assets/svg/phone-icon.svg';

const Contact = ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <section className={`w-full p-4 ${className}`} {...props}>
        <div className="flex flex-col lg:flex-row justify-between gap-20 mx-auto max-w-screen-xl">
            <div className="flex flex-col gap-8 lg:w-1/2">
                <span className="text-accent text-xl translate-y-4 font-semibold">Platiquemos</span>

                <h2 className="text-4xl lg:text-6xl font-semibold">
                    Contáctame <br />
                    para mas info
                </h2>

                <div className="leading-tight text-sm lg:text-base">
                    <p>¿Quieres un diagnostico financiero totalmente gratis?</p>
                    <p>¿Tienes dudas o comentarios? </p>
                </div>

                <hr className="w-2/3 lg:w-full border-content/20" />

                <form action="" className="grid gap-4 lg:gap-8">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="grid lg:w-1/2 gap-1.5">
                            <label className="ml-1 font-semibold" htmlFor="name">Nombre</label>
                            <input className="input" type="text" id="name" placeholder="Nombre" />
                        </div>

                        <div className="grid lg:w-1/2 gap-1.5">
                            <label className="ml-1 font-semibold" htmlFor="lastName">Apellido</label>
                            <input className="input" type="text" id="lastName" placeholder="Apellido" />
                        </div>
                    </div>

                    <div className="grid gap-1.5">
                        <label className="ml-1 font-semibold" htmlFor="email">Email</label>
                        <input className="input" type="text" id="email" placeholder="email@example.com" />
                    </div>

                    <div className="grid gap-1.5">
                        <label className="ml-1 font-semibold" htmlFor="message">Mensaje</label>
                        <textarea className="input h-64" cols={8} id="message" placeholder="Mensaje" />
                    </div>
                </form>
            </div>

            <div className="grid gap-8 lg:w-1/2">
                <Image
                    alt="Retrato Victor Villareal"
                    className="border rounded-3xl object-cover h-full w-full shadow-xl"
                    src="/img/victor-portrait.png"
                    width={950}
                    height={770}
                />

                <div className="grid gap-4 border shadow-xl p-4 rounded-3xl">
                    <Link className="bg-content/5 rounded-2xl p-8 flex gap-4 items-center" href="">
                        <EmailIcon className="text-accent-dark size-12 bg-accent/20 p-3 rounded-full overflow-visible" />

                        <div className="grid">
                            <strong className="text-xl">Email</strong>
                            <span className="text-sm text-content/80">XXXXXXXXXXX@XXXX.XXX</span>
                        </div>
                    </Link>

                    <Link className="bg-content/5 rounded-2xl p-8 flex gap-4 items-center" href="">
                        <PhoneIcon className="text-accent-dark size-12 bg-accent/20 p-3 rounded-full overflow-visible" />

                        <div className="grid">
                            <strong className="text-xl">Teléfono</strong>
                            <span className="text-sm text-content/80">XXXXXXXXXXX</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
