const { Router } = require('express')
const { getCrocodiles, getCrocodile, getCrocodileName, getCrocodileColor, getCrocodileHabitat } = require('../controllers/crocodiles')

const rutas = Router()

rutas.get('/', getCrocodiles)
rutas.get('/:id', getCrocodile)
rutas.get('/name/:name', getCrocodileName)
rutas.get('/color/:color', getCrocodileColor)
rutas.get('/habitat/:habitat', getCrocodileHabitat)

module.exports = rutas
