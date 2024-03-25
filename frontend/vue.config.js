const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        proxy: {
            '/api/river': {
                target: 'http://localhost:7875',
                ws: true,
                changeOrigin: true
            }
        }
    },
})
