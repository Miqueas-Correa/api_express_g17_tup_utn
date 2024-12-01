const { Router } = require('express')
const { getPeces, getPez, getPezByEspecie, getPezByNombre } = require('../controllers/peces')

const rutas = Router()

rutas.get('/', getPeces)
rutas.get('/:id', getPez)
// rutas.get('/:colorPez', getPezByColor)
rutas.get('/especie/:especiePez', getPezByEspecie)
rutas.get('/nombre/:nombrePez', getPezByNombre)
// rutas.get('/id/:idPez', getPezByID)

module.exports = rutas
