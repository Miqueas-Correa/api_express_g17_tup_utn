const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/v1/dogs', require('../routes/dogs')) // Miqueas Correa
    this.app.use('/api/v1/cats', require('../routes/cats')) // Wanda Suarez
    this.app.use('/api/v1/peces', require('../routes/peces')) // Brenda Yañez

  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server
