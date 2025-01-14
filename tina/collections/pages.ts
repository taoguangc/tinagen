import type { Collection } from 'tinacms';

const Pages: Collection = {
  label: 'Pages',
  name: 'pages',
  path: 'src/content/pages',
  // format: 'mdx',
  // defaultItem: () => ({
  //     title: '新页面',
  //     body: 'Start writing here...'
  // }),
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
      label: 'Body',
      name: 'body',
      isBody: true,
      templates: [
        {
          name: 'hero',
          label: 'Hero Section',
          fields: [
            {
              type: 'string',
              name: 'heading',
              label: 'Heading'
            },
            {
              type: 'string',
              name: 'subheading',
              label: 'Subheading'
            },
            {
              type: 'image',
              name: 'image',
              label: 'Hero Image'
            }
          ]
        }
      ]
    }
  ]
};

export default Pages;
