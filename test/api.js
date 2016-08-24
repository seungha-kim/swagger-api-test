// https://dredd.readthedocs.io/en/latest/usage-js/
const path = require('path')
const Dredd = require('dredd')

const dredd = new Dredd({
  server: 'http://localhost:3000',
  options: {
    path: path.resolve(__dirname, '..', 'app', 'spec.yml'),
    hookfiles: [
      'test/hooks.js'
    ]
  }
})

dredd.run((err, stats) => {
  if (err) console.error(err)
})
