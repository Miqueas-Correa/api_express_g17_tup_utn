// Importamos axios para realizar peticiones HTTP y express para manejar las solicitudes y respuestas
const axios = require('axios')
const { request, response } = require('express')
// Definimos la URL base de la API que vamos a consumir
const URLANIMAL = 'https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/crocodiles/'

// Controlador para obtener cocodrilos con filtrado opcional por id, nombre, color y hábitat
const getCrocodiles = (req = request, res = response) => {
  // Extraemos los parámetros de consulta (query) que se pueden utilizar para filtrar
  const { id = '', name = '', color = '', habitat = '' } = req.query
  console.log(id, name, color, habitat)

  // Creamos un objeto URLSearchParams para construir los parámetros de consulta dinámicamente
  const params = new URLSearchParams()
  if (id) params.append('id', id)
  if (name) params.append('name', name)
  if (color) params.append('color', color)
  if (habitat) params.append('habitat', habitat)

  // Construimos la cadena de filtros en la URL si hay parámetros
  const filter = params.toString() ? `?${params.toString()}` : ''

  // Realizamos una petición GET a la API con los filtros aplicados
  axios.get(URLANIMAL + filter)
    .then((response) => {
      // Desestructuramos la respuesta para obtener los datos
      const { data = [] } = response

      // Enviamos una respuesta con un mensaje de éxito y los datos obtenidos
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // Manejo de errores en caso de fallo en la solicitud
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// Controlador para obtener un cocodrilo por su ID
const getCrocodile = (req = request, res = response) => {
  // Extraemos el ID del cocodrilo de los parámetros de ruta
  const { id = '' } = req.params
  console.log(id)

  // Realizamos una petición GET a la API utilizando el ID
  axios.get(`${URLANIMAL}${id}`)
    .then((response) => {
      const { data } = response
      // Enviamos la respuesta con los datos del cocodrilo
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // Manejo de errores en caso de que no se encuentre el cocodrilo
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error: 'Not found'
      })
    })
}

// Controlador para obtener un cocodrilo por su nombre
const getCrocodileName = (req = request, res = response) => {
  // Extraemos el nombre del cocodrilo de los parámetros de ruta
  const { name = '' } = req.params
  console.log(name)

  // Realizamos una petición GET a la API filtrando por nombre
  axios.get(URLANIMAL + '?name=' + name)
    .then((response) => {
      const { data } = response

      // Enviamos la respuesta con los datos filtrados
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      // Manejo de errores en caso de que no se encuentre el cocodrilo
      res.status(400).json({
        msg: 'Error',
        error: 'Not found'
      })
    })
}

// Controlador para obtener un cocodrilo por su color
const getCrocodileColor = (req = request, res = response) => {
  // Extraemos el color del cocodrilo de los parámetros de ruta
  const { color = '' } = req.params
  console.log(color)

  // Realizamos una petición GET a la API filtrando por color
  axios.get(URLANIMAL + '?color=' + color)
    .then((response) => {
      const { data } = response

      // Enviamos la respuesta con los datos filtrados
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      // Manejo de errores en caso de que no se encuentre el cocodrilo
      res.status(400).json({
        msg: 'Error.',
        error: 'Not found'
      })
    })
}

// Controlador para obtener un cocodrilo por su hábitat
const getCrocodileHabitat = (req = request, res = response) => {
  // Extraemos el hábitat del cocodrilo de los parámetros de ruta
  const { habitat = '' } = req.params
  console.log(habitat)

  // Realizamos una petición GET a la API filtrando por hábitat
  axios.get(URLANIMAL + '?habitat=' + habitat)
    .then((response) => {
      const { data } = response

      // Enviamos la respuesta con los datos filtrados
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      // Manejo de errores en caso de que no se encuentre el cocodrilo
      res.status(400).json({
        msg: 'Error',
        error: 'Not found'
      })
    })
}

// Exportamos los controladores para que puedan ser utilizados en las rutas
module.exports = {
  getCrocodiles,
  getCrocodile,
  getCrocodileName,
  getCrocodileColor,
  getCrocodileHabitat
}
