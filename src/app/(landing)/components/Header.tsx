import Image from 'next/image';

const Header = (props: React.HTMLProps<HTMLElement>) => (
    <header className="flex flex-col gap-8 lg:flex-row items-center p-4 py-10 lg:py-4" {...props}>
        <div className="max-w-2xl mx-auto grid gap-6">
            <h1 className="text-3xl lg:text-7xl font-semibold">
                Tu Libertad Financiera comienza aquí
            </h1>

            <p className="text-lg max-w-xl font-light">
                VV Finanzas nace con la idea de transformar la mentalidad de las personas en
                educación financiera de una manera amigable y personalizada de tal forma que
                encuentren estabilidad y tranquilidad mediante el logro de sus metas.
            </p>
        </div>

        <Image
            alt="Persona de negocios"
            className="w-3/4 lg:w-auto"
            height={911}
            src="/img/header-img.png"
            width={833}
        />
    </header>
);

export default Header;

