// Importamos el módulo Router de Express para crear rutas
const { Router } = require('express')
// Importamos los controladores para manejar las solicitudes relacionadas con cocodrilos
const { getCrocodiles, getCrocodile, getCrocodileName, getCrocodileColor, getCrocodileHabitat } = require('../controllers/crocodiles')

// Creamos una instancia del router de Express
const rutas = Router()

// Definimos la ruta para obtener todos los cocodrilos
rutas.get('/', getCrocodiles)
// Definimos la ruta para obtener un cocodrilo por su ID
rutas.get('/:id', getCrocodile)
// Definimos la ruta para obtener un cocodrilo por su nombre
rutas.get('/name/:name', getCrocodileName)
// Definimos la ruta para obtener un cocodrilo por su color
rutas.get('/color/:color', getCrocodileColor)
// Definimos la ruta para obtener un cocodrilo por su hábitat
rutas.get('/habitat/:habitat', getCrocodileHabitat)

// Exportamos el módulo de rutas para que pueda ser utilizado en otros archivos
module.exports = rutas
