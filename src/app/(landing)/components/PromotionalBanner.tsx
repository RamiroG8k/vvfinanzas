const PromotionalBanner = ({ className, ...props}: React.HTMLProps<HTMLDivElement>) => (
    <div className={`bg-accent/10 h-72 p-4 ${className}`} {...props}>
        <div className="max-w-screen-xl mx-auto flex items-center h-full">
            <h2 className="text-3xl lg:text-5xl font-semibold w-1/2">
                Aprende sobre <br /> Educación Financiera
            </h2>

            <div className="flex w-1/2 gap-12">
                <div className="w-56">
                    <strong className="text-accent text-8xl">85%</strong>
                    <p className="text-lg font-light leading-tight">Personas no tienen un control financiero.</p>
                </div>

                <span className="w-0.5 h-24 mx-2 bg-black" />

                <div className="w-56">
                    <strong className="text-accent text-8xl">60M+</strong>
                    <p className="text-lg font-light leading-tight">Personas no tienen un control financiero.</p>
                </div>
            </div>
        </div>
    </div>
);

export default PromotionalBanner;
