import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */

// https://movies-ajax-server.profamenta.repl.co

export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 443,
    },
    proxy: { // Connect to API backend server when doing fetch('/api')
      '/api': {
        target: 'https://final-project-ajax-server-jtmenese.ecs162instruct.repl.co/',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },

}
