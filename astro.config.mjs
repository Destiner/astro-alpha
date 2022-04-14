import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.org',
  trailingSlash: 'always',
  integrations: [vue(), sitemap()],
  markdown: {
    render: [
      '@astrojs/markdown-remark',
      {
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'vitesse-dark',
          langs: ['ts', 'js', 'html', 'css', 'vue', 'astro'],
          wrap: false,
        },
        remarkPlugins: [
          'remark-gfm',
          'remark-smartypants',
        ],
        rehypePlugins: [
          'rehype-slug',
        ],
      },
    ],
  },
});
