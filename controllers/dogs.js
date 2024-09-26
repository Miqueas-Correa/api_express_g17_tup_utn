// Importación de Axios para hacer solicitudes HTTP y objetos request/response de Express
const axios = require('axios')
const { request, response } = require('express')

// URL base de la API externa para obtener información de animales
const URLANIMAL = 'https://66f1f8ab415379191552b41c.mockapi.io/api/v1/animales/'

// Función para obtener una lista de perros con filtros opcionales
const getDogs = (req = request, res = response) => {
  // Extracción de parámetros de consulta (query params) de la solicitud
  const { id = '', raza = '', fechaNacimiento = '', nombre = '' } = req.query
  console.log(id, raza, fechaNacimiento, nombre) // Para depuración

  // Crear una instancia de URLSearchParams para agregar los filtros
  const params = new URLSearchParams()

  // Añadir parámetros a la URL si están presentes
  if (id) params.append('id', id)
  if (raza) params.append('raza', raza)
  if (fechaNacimiento) params.append('fechaNacimiento', fechaNacimiento)
  if (nombre) params.append('nombre', nombre)

  // Convertir los parámetros a una cadena de consulta (si hay alguno)
  const filter = params.toString() ? `?${params.toString()}` : ''

  // Realizar una solicitud GET a la API con los filtros construidos
  axios.get(URLANIMAL + filter)
    .then((response) => {
      const { data = [] } = response // Extraer datos de la respuesta de la API

      // Enviar respuesta exitosa con los datos obtenidos
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // Manejar errores, como si la API no está disponible o la solicitud falla
      console.log(error) // Para depuración
      res.status(404).json({
        msg: 'Error',
        error: 'Not  found'
      })
    })
}

// Función para obtener un perro por su ID
const getDog = (req = request, res = response) => {
  // Extraer el ID del parámetro de ruta
  const { id = '' } = req.params
  console.log(id) // Para depuración

  // Realizar una solicitud GET a la API usando el ID del perro
  axios.get(`${URLANIMAL}${id}`)
    .then((response) => {
      const { data } = response // Extraer datos de la respuesta

      // Enviar respuesta exitosa con los datos obtenidos
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // Manejar errores, como si no se encuentra el perro
      console.log(error) // Para depuración
      res.status(404).json({
        msg: 'Error',
        error: 'Not  found'
      })
    })
}

// Función para obtener perros por su raza
const getDogRaza = (req = request, res = response) => {
  // Extraer la raza del parámetro de ruta
  const { raza = '' } = req.params
  console.log(raza) // Para depuración

  // Realizar una solicitud GET a la API filtrando por la raza
  axios.get(URLANIMAL + '?raza=' + raza)
    .then((response) => {
      const { data } = response // Extraer datos de la respuesta

      // Enviar respuesta exitosa con los datos obtenidos
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // Manejar errores, como si no se encuentran perros con esa raza
      console.log(error) // Para depuración
      res.status(404).json({
        msg: 'Error.',
        error: 'Not found'
      })
    })
}

// Exportar las funciones para que puedan ser usadas en otros módulos
module.exports = {
  getDogs,
  getDog,
  getDogRaza
}
