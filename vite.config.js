import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import svgLoader from 'vite-svg-loader';
import electron from 'vite-plugin-electron';
import electronRenderer from 'vite-plugin-electron-renderer';

// 环境变量配置
const DEV_SERVER_PORT = process.env.VITE_DEV_SERVER_PORT || 8080;

export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    include: ['NeteaseCloudMusicApi'],
  },
  root: path.resolve(__dirname),
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
    mode === 'electron' &&
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
    mode === 'electron' &&
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
    port: DEV_SERVER_PORT,
    strictPort: true,
    historyApiFallback: true,
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
      external: [
        '@unblockneteasemusic/rust-napi/darwin-x64',
        '@unblockneteasemusic/rust-napi/darwin-arm64',
      ],
    },
  },
}));
