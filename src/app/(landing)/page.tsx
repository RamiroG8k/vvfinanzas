import Logo from '@/assets/svg/logo.svg';

export default function Home() {
	return (
		<main className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12">
			<div className="container mx-auto max-w-3xl space-y-6 flex flex-col justify-center items-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl text-center">
					Something big is coming
				</h1>

				<p className="text-2xl text-gray-600">Get ready...</p>

				<Logo className="size-40 text-content translate-y-20" />
			</div>
		</main>
	);
}
