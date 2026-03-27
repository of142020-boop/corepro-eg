import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
		category: z.string().optional(),
		featured: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional().default([]),
		seoTitle: z.string().optional(),
	}),
});

export const collections = { blog };
