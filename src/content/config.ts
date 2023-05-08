import { z, defineCollection } from "astro:content";

export const collections = {
    'education': defineCollection({
        schema: z.object({
            institution: z.string(),
            course: z.string(),
            modules: z.array(z.string()),
            grade: z.string(),
            from: z.date(),
            to: z.nullable(z.date()),
        }),
    }),
    'experience': defineCollection({
        schema: z.object({
            company: z.string(),
            roles: z.array(z.object({
                title: z.string(),
                description: z.string(),
                tech: z.array(z.string()),
                from: z.string().transform((str) => new Date),
                to: z.nullable(z.string().transform((str: string | number | Date) => new Date(str))),
            })),
            location: z.string()
        })
    })
}