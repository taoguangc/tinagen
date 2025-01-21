import type { Collection } from 'tinacms'

const Pages: Collection = {
  label: 'Pages',
  name: 'pages',
  path: 'src/content/pages',
  // format: 'mdx',

  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Meta Title',
          description: 'This is the meta Title that will appear in search engines'
        },
        {
          type: 'string',
          name: 'description',
          label: 'Meta Description',
          description: 'This is the meta description that will appear in search engines'
        },
        {
          type: 'object',
          name: 'image',
          label: 'Image',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Src'
            },
            {
              type: 'string',
              name: 'alt',
              label: 'Image Alt'
            }
          ]
        }
      ]
    },
    {
      type: 'rich-text' as const,
      name: 'body',
      label: 'Body',
      isBody: true
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      ui: {
        visualSelector: true
      },
      templates: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              type: 'string',
              label: 'Headline',
              name: 'headline'
            },
            {
              type: 'string',
              label: 'Sub Headline',
              name: 'subHeadline'
            },
            {
              type: 'string',
              label: 'Text',
              name: 'text',
              ui: {
                component: 'textarea'
              }
            }
          ]
        },
        {
          label: 'Feature',
          name: 'feature',
          fields: [
            {
              type: 'object',
              label: 'Feature Items',
              name: 'items',
              list: true,
              fields: [
                {
                  type: 'string',
                  label: 'Title',
                  name: 'title'
                },
                {
                  type: 'string',
                  label: 'Text',
                  name: 'text'
                },
                {
                  type: 'image',
                  label: 'Feature Image',
                  name: 'fimage'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Pages
