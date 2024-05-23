module.exports = {
    // 反向代理
    devServer: {
        host: 'localhost',
        port: 8088,
        proxy: {
            '/api': {
                target: 'http://localhost:8060',
                ws: true,
                changeOrigin: true,
                pathRewrite: {"^/api": ""}
            },
        },
    }
}