import '@/style/globals.css';
import { Metadata } from 'next';
import { inter, pretendard } from '@/public/fonts/fonts';
import { env } from '@/env.mjs';
import { siteConfig } from '@/config/site';
import { Particles } from '@/components/particles';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Script from 'next/script';
import GoogleAnalytics from '@/components/google-analytics';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'en',
		type: 'website',
	},
	twitter: {
		title: siteConfig.name,
		description: siteConfig.description,
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'google',
	},
	keywords: ['Next.js', 'Vercel', 'Websites', 'Sexy', 'Full-stack'],
	authors: [
		{
			name: siteConfig.name,
			url: siteConfig.url,
		},
	],
	category: 'portfolio',
	creator: siteConfig.name,
	publisher: siteConfig.name,
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	colorScheme: 'dark',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<GoogleAnalytics id={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
			<body className={inter.className}>
				<VercelAnalytics />
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}
			</body>
		</html>
	);
}
