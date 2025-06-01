
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1702, hash: 'f7e79a19f7629a75e4e6892ecfb11c66e2a7ac63f0efa3862d4af79fa6d9870f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2215, hash: '9439ae3daa3ee824dcf97efd76e76e578ca62999cb9d96c93af4e4a8fef55e1b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64230, hash: '01e7b9c8dc8e285707076035fac8aa747ab5055f7c2829bdc595e82dab66cfe1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
