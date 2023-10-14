import { Github, Mail } from 'lucide-react';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Sendzha',
	description: 'Building aesthetic web apps',
	url: 'https://sendzha.com',
	mainNav: [
		{
			title: 'Projects',
			route: '/projects',
		},
		{
			title: 'Contact',
			route: '/contact',
		},
	],
	links: [
		{
			icon: <Mail size={20} />,
			role: 'Business email',
			label: 'dev@sendzha.com',
		},
		{
			icon: <Github size={20} />,
			href: 'https://github.com/sench-a',
			role: 'Github',
			label: 'sench-a',
		},
	],
	projects: [
		{
			id: 'freelance',
			title: 'STP Service',
			link: 'https://stpservice.ee/eng',
			description: 'Website for a car repair service based in Tallinn, Estonia',
			disabled: true,
		},
		{
			id: 'freelance',
			title: 'Clouder Club',
			link: 'https://clouderclub.com/en/catering',
			description: 'Website for a hookah lounge & catering based in Tallinn, Estonia',
		},
		{
			id: 'personal',
			title: 'Rebell',
			link: 'https://rb.sendzha.com',
			description: 'Full-stack e-commerce app.',
			disabled: true,
		},
	],
};
