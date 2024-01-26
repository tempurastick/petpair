import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        abstract:  resolve(__dirname, 'src/abstract.html'),
        radio:  resolve(__dirname, 'src/radiospot.html'),
        impressum:  resolve(__dirname, 'src/impressum.html'),
      },
      outDir: './dist'
    }
  },
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}
