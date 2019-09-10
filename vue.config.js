module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5002',
        ws: true,
        changeOrigin: true
      }
    }
  }
}