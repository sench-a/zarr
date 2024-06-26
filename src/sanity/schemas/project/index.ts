import { Icons } from '@/components/icons';
import { link, title } from '@/sanity/schemas/fragments';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectTypes = [
	{ title: 'Professional', value: 'professional' },
	{ title: 'Personal', value: 'personal' },
];

export default defineType({
	name: 'project',
	title: 'Projects',
	type: 'document',
	icon: Icons.project,
	fields: [
		defineField({
			name: 'type',
			type: 'string',
			options: {
				list: projectTypes,
			},
			validation: (Rule) => Rule.required(),
		}),

		title,
		link,

		defineField({
			name: 'github',
			title: 'GitHub',
			type: 'url',
		}),

		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'stack',
			title: 'Tech Stack',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'item',
					type: 'object',
					fields: [
						title,
						defineField({
							name: 'description',
							title: 'Description',
							type: 'text',
						}),
					],
				}),
			],
		}),
	],
});
