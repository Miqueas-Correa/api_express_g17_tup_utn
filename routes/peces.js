const { Router } = require('express')
const { getPeces, getPezByColor, getPezByEspecie, getPezByNombre, getPezByID } = require('../controllers/peces')

const rutas = Router()

rutas.get('/', getPeces)
rutas.get('/:colorPez', getPezByColor)
rutas.get('/especie/:especiePez', getPezByEspecie)
rutas.get('/nombre/:nombrePez', getPezByNombre)
rutas.get('/id/:idPez', getPezByID)

module.exports = rutas
