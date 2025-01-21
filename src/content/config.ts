import { defineCollection, z } from 'astro:content'

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seo: seoSchema.optional()
  })
})

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z
          .object({
            src: z.string(),
            alt: z.string().optional()
          })
          .optional()
      })
      .optional(),
    blocks: z
      .array(
        z.discriminatedUnion('_template', [
          z.object({
            _template: z.literal('hero'),
            headline: z.string(),
            subHeadline: z.string(),
            text: z.string()
          }),
          z.object({
            _template: z.literal('feature'),
            items: z.array(
              z.object({
                title: z.string(),
                text: z.string(),
                fimage: z.string().optional()
              })
            )
          })
        ])
      )
      .default([])
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
})

export const collections = {
  posts,
  projects,
  pages
}
