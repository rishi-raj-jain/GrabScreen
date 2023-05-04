const { join } = require('path')

module.exports = {
  connector: '@edgio/express',
  express: {
    appPath: join(process.cwd(), 'server.js'),
    bundler: '@vercel/nft',
  },
}
