import Link from 'next/link';

import InstagramIcon from '@/assets/svg/instagram-icon.svg';
import Logo from '@/assets/svg/logo.svg';
import TikTokIcon from '@/assets/svg/tiktok-icon.svg';
import WhatsAppIcon from '@/assets/svg/whatsapp-icon.svg';

const Footer = ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <footer className={`bg-black text-white h-auto ${className}`} {...props}>
        <div className="relative h-80 lg:h-auto flex justify-between items-end w-full mx-auto max-w-screen-xl p-8">
            <div className="h-auto w-40 flex gap-4">
                <Link href="#" className="text-2xl p-2 center relative">
                    <InstagramIcon />
                    <span className="sr-only absolute w-full h-full">Instagram</span>
                </Link>

                <Link href="#" className="text-2xl p-2 center relative">
                    <TikTokIcon />
                    <span className="sr-only absolute w-full h-full">TikTok</span>
                </Link>

                <Link href="#" className="text-2xl p-2 center relative">
                    <WhatsAppIcon />
                    <span className="sr-only absolute w-full h-full">WhatsApp</span>
                </Link>
            </div>

            <Logo className="size-40 top-10 lg:size-64 absolute lg:static" />

            <ul className="h-auto w-40 grid gap-2 text-right">
                <li className="text-background/60 font-medium hover:text-background">
                    <Link href="#goals">Objetivos</Link>
                </li>

                <li className="text-background/60 font-medium hover:text-background">
                    <Link href="#services">Servicios</Link>
                </li>

                <li className="text-background/60 font-medium hover:text-background">
                    <Link href="#our-tools">Herramientas</Link>
                </li>

                <li className="text-background/60 font-medium hover:text-background">
                    <Link href="#plans">Planes</Link>
                </li>

                <li className="text-background/60 font-medium hover:text-background">
                    <Link href="#contact">Contacto</Link>
                </li>
            </ul>
        </div>

        <div className="center w-full mx-auto max-w-screen-xl">
            <hr className="border-background/30 w-full" />

            <div className="flex flex-col lg:flex-row justify-between p-8 w-full">
                <span  className="text-background/60 font-extralight text-sm">2024 VV Finanzas - All rights reserved</span>

                <Link className="text-background/60 font-extralight text-sm hover:text-background" href="">Términos y condiciones</Link>
            </div>
        </div>
    </footer>
);

export default Footer;
