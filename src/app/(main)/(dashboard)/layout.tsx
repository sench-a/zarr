import { Nav } from '@/components/nav';
import { BackButton } from '@/components/back-button';
import type { LayoutProps } from '@/types';

export default function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<header className="max-width-screen">
				<nav className="py-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<BackButton />
					<Nav />
				</nav>
			</header>

			<main className="max-width-screen">{children}</main>
		</>
	);
}