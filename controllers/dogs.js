const axios = require('axios')
const { request, response } = require('express')
const URLANIMAL = 'https://66f1f8ab415379191552b41c.mockapi.io/api/v1/animales/'

const getDogs = (req = request, res = response) => {
  const { id = '', raza = '', fechaNacimiento = '', nombre = '' } = req.query
  console.log(id, raza, fechaNacimiento, nombre)

  const params = new URLSearchParams()
  if (id) params.append('id', id)
  if (raza) params.append('raza', raza)
  if (fechaNacimiento) params.append('fechaNacimiento', fechaNacimiento)
  if (nombre) params.append('nombre', nombre)

  const filter = params.toString() ? `?${params.toString()}` : ''

  axios.get(URLANIMAL + filter)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getDog = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(URLANIMAL + id)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getDogRaza = (req = request, res = response) => {
  const { raza = '' } = req.params
  console.log(raza)

  axios.get(URLANIMAL + '?raza=' + raza)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Exito.',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(400).json({
        msg: 'Error.',
        error
      })
    })
}

module.exports = {
  getDogs,
  getDog,
  getDogRaza
}
