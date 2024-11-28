const express = require('express')
const cors = require('cors') // Importamos cors

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware() // Llama al middleware
    this.rutas() // Establece las rutas
  }

  middleware () {
    // Habilitamos CORS globalmente para todas las rutas
    this.app.use(cors({
      origin: '*', // Permite solicitudes de todos los orígenes
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
    }))

    this.app.use(express.static('public')) // Sirve archivos estáticos desde la carpeta 'public'
  }

  rutas () {
    this.app.use('/api/v1/dogs', require('../routes/dogs')) // Rutas de perros
    this.app.use('/api/v1/crocodiles', require('../routes/crocodiles')) // Rutas de cocodrilos
    this.app.use('/api/v1/cats', require('../routes/cats')) // Rutas de gatos
    this.app.use('/api/v1/peces', require('../routes/peces')) // Rutas de peces
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto ${this.port}`)
    })
  }
}

module.exports = Server
