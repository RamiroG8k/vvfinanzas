import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => (
    <nav className="h-16 lg:h-20 flex items-center">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="relative">
                <Link href="/" className="inset-0 w-full h-full absolute sr-only">
                    Victor Villarreal
                </Link>

                <Image
                    alt="Logo"
                    className="h-10 lg:hidden"
                    height={48}
                    src="/svg/vv-icon-logo.svg"
                    width={48}
                />

                <Image
                    alt="Logo"
                    className="hidden h-10 lg:block"
                    height={48}
                    src="/svg/logo-horizontal.svg"
                    width={242}
                />
            </div>

            <div className="hidden lg:block space-x-10 uppercase text-md font-medium [letter-spacing:1px]">
                <Link href="/" className="link">
                    Home
                </Link>

                <Link href="#goals" className="link">
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

            <Link href="/login" className="border border-black/70 px-4 lg:px-8 py-1 lg:py-1.5 rounded-full">
                Iniciar Sesión
            </Link>
        </div>
    </nav>
);

export default NavBar;
