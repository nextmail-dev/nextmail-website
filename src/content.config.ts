import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['en', 'zh-CN']),
    docSlug: z.enum(['getting-started', 'accounts', 'sync', 'security', 'faq']),
    order: z.number(),
    source: z.url(),
  }),
});
export const collections = { docs };
