const { Router } = require('express')
const { getPeces, getPecesByColor } = require('../controllers/peces')

const rutas = Router()

rutas.get('/', getPeces)
rutas.get('/:color', getPecesByColor)

module.exports = rutas