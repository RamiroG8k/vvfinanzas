import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => (
    <nav className="h-20 flex items-center">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="relative">
                <Link href="/" className="inset-0 w-full h-full absolute sr-only">
                    Victor Villarreal
                </Link>

                <Image
                    alt="Logo tamaño completo"
                    className="h-10"
                    height={48}
                    src="/svg/logo-horizontal.svg"
                    width={242}
                />
            </div>

            <div className="space-x-10 uppercase text-md font-medium [letter-spacing:1px]">
                <Link href="/" className="link">
                    Home
                </Link>

                <Link href="#objectives" className="link">
                    Objetivos
                </Link>

                <Link href="#services" className="link">
                    Servicios
                </Link>

                <Link href="#tools" className="link">
                    Herramientas
                </Link>

                <Link href="#about" className="link">
                    Acerca
                </Link>

                <Link href="#contact" className="link">
                    Contacto
                </Link>
            </div>

            <Link href="/login" className="border border-black/70 px-8 py-1.5 rounded-full">
                Iniciar Sesión
            </Link>
        </div>
    </nav>
);

export default NavBar;
