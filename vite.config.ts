import { defineConfig, UserConfig } from 'vite'

const isDocker = process.env.IS_DOCKER === 'true'

export default defineConfig({
  root: 'src',
  server: {
    hmr: {
      clientPort: 3001,
      port: 3001
    },
    host: '0.0.0.0',
    port: 3000,
  }
})
