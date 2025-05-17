import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import svgLoader from 'vite-svg-loader';
import electron from 'vite-plugin-electron';
import electronRenderer from 'vite-plugin-electron-renderer';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    include: ['NeteaseCloudMusicApi'],
  },
  root: process.cwd(),
  base: mode === 'electron' ? './' : '/',
  plugins: [
    vue(),
    svgLoader(),
    VitePWA({
      manifest: {
        name: 'YesPlayMusic',
        theme_color: '#ffffff00',
        background_color: '#335eea',
        icons: [
          {
            src: 'img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      filename: 'service-worker.js',
    }),
    // 在electron插件配置中添加vite.resolve配置
    process.env.IS_ELECTRON_DEV &&
      electron([
        {
          entry: 'src/background.js',
          preload: 'src/electron/preload.js',
          vite: {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
              },
              extensions: ['.js', '.json', '.node'],
            },
            build: {
              outDir: 'dist_electron',
              rollupOptions: {
                external: [
                  '@unblockneteasemusic/rust-napi',
                  'electron/tray',
                  'electron/mpris',
                  'electron/globalShortcut',
                ],
              },
            },
          },
        },
      ]),
    process.env.IS_ELECTRON_DEV &&
      electronRenderer({
        preload: 'src/electron/preload.js',
        optimizeDeps: {
          exclude: ['os', 'path'],
        },
        rollupOptions: {
          external: ['electron'],
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    fallback: {
      path: 'path-browserify',
      fs: false,
    },
  },
  server: {
    host: '127.0.0.1',
    port: process.env.DEV_SERVER_PORT || 8080,
    strictPort: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/'),
      },
    },
  },
  build: {
    outDir: mode === 'electron' ? 'dist-electron' : 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      external: [
        '@unblockneteasemusic/rust-napi/darwin-x64',
        '@unblockneteasemusic/rust-napi/darwin-arm64',
      ],
    },
  },
}));
