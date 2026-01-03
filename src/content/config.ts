import { z, defineCollection } from "astro:content";

export const collections = {
  education: defineCollection({
    schema: z.object({
      institution: z.string(),
      course: z.string(),
      modules: z.array(z.string()),
      grade: z.string(),
      from: z.date(),
      to: z.optional(z.date()),
    }),
  }),
  experience: defineCollection({
    schema: z.object({
      company: z.string(),
      roles: z.array(
        z.object({
          title: z.string(),
          description: z.optional(z.string()),
          tech: z.optional(z.array(z.string())),
          from: z.date(),
          to: z.optional(z.date()),
        }),
      ),
      location: z.string(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.optional(z.array(z.string())),
      path: z.string(),
      github: z.string(),
      imagePath: z.string(),
      imageAltText: z.string(),
    }),
  }),
};
