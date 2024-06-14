const PromotionalBanner = ({ className, ...props}: React.HTMLProps<HTMLDivElement>) => (
    <div className={`bg-accent/10 lg:h-72 p-4 py-10 lg:py-4 ${className}`} {...props}>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center h-full">
            <h2 className="text-3xl lg:text-5xl font-semibold lg:w-1/2">
                Aprende sobre <br /> Educación Financiera
            </h2>

            <div className="flex flex-col items-start lg:items-center lg:flex-row lg:w-1/2 gap-4 lg:gap-12">
                <div className="lg:w-56">
                    <strong className="text-accent text-5xl lg:text-8xl">85%</strong>
                    <p className="text-lg font-light leading-tight">Personas no tienen un control financiero.</p>
                </div>

                <span className="w-2/3 lg:w-px h-px lg:h-24 mx-2 bg-black/40" />

                <div className="lg:w-56">
                    <strong className="text-accent text-5xl lg:text-8xl">60M+</strong>
                    <p className="text-lg font-light leading-tight">Personas no tienen un control financiero.</p>
                </div>
            </div>
        </div>
    </div>
);

export default PromotionalBanner;
