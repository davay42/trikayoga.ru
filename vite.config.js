import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  plugins: [
    ViteAliases({
      dir: '.vitepress',
      deep: false,
      adjustDuplicates: true,
    }),
    Components({
      dirs: ['.vitepress/theme/components', '.vitepress/comps'],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      customLoaderMatcher: (id) => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
  ],
  optimizeDeps: {
    include: ['vue'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
})
