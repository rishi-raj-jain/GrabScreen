import { Router } from '@edgio/core'

export default new Router().fallback(({ renderWithApp, removeUpstreamResponseHeader, cache }) => { 
  removeUpstreamResponseHeader('cache-control')
  cache({
    browser: false,
    edge: {
      maxAgeSeconds: 60 * 60 * 24 * 365
    }
  })
  renderWithApp()                                                                                                 
})
