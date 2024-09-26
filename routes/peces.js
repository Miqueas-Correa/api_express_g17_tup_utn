const { Router } = require('express')
const { getPeces, getPezByColor } = require('../controllers/peces')

const rutas = Router()

rutas.get('/', getPeces)
rutas.get('/:colorPez', getPezByColor)

module.exports = rutas
