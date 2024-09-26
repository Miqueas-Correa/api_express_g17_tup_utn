const { Router } = require('express')
const { getCats, getCatE2, getCatE3, getCatE4 } = require('../controllers/cats')
const rutas = Router()

rutas.get('/', getCats)
rutas.get('/:id', getCatE2)
rutas.get('/cazador/:cazador', getCatE3)
rutas.get('/color/:color', getCatE4)

module.exports = rutas
