const { Router } = require('express')
const { getDogs, getDog, getDogRaza } = require('../controllers/dogs')

const rutas = Router()

rutas.get('/', getDogs)
rutas.get('/:ID', getDog)
rutas.get('/raza/:raza', getDogRaza)

module.exports = rutas
