import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const monthly = defineCollection({
  loader: glob({ base: './src/content', pattern: '[0-9][0-9][0-9][0-9]/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      photo: z
        .object({
          src: image(),
          alt: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { monthly };
