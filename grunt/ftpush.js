module.exports = {
  push: {
    auth: {
      host: '141.138.151.137',
      port: 21,
      authKey: 'key1'
    },
    src: 'dist',
    dest: '/domains/<%= package.domain %>/public_html',
    simple: true,
    useList: false
  }
}