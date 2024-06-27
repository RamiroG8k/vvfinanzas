export default function DiagnosticPage() {
    return (
        <main className="flex flex-col gap-4 h-full">
            <h2 className="text-xl font-medium">Diagnostico</h2>

            <hr className="w-64"/>

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
            </form>
        </main>
    );
};
