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
    // Establece el punto de entrada para las rutas de cocodrilos, todas las solicitudes que comienzan con '/api/v1/crocodiles' serán gestionadas por el archivo de rutas '../routes/crocodiles'.
    this.app.use('/api/v1/crocodiles', require('../routes/crocodiles')) // Matias Emanuel Coronel Dittler
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server
