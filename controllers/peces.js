const axios = require('axios')
const { request, response } = require('express')

/* Query Params */
const getPeces = (req = request, res = response) => {
  const { id = '', especie = '', nombre = '', color = '' } = req.query
  console.log(id, especie, nombre, color)

  const params = new URLSearchParams()

  if (id) params.append('id', id)
  if (especie) params.append('especie', especie)
  if (nombre) params.append('nombre', nombre)
  if (color) params.append('color', color)

  const filtro = params.toString() ? `?${params.toString()}` : ''

  axios.get(`https://66f21a344153791915530b67.mockapi.io/api/v1/peces${filtro}`)
    .then((response) => {
      console.log(response)
      const { data = [] } = response

      let filteredData = data

      if (id) {
        filteredData = data.filter(pez => pez.id === id)
      }

      if (especie) {
        filteredData = filteredData.filter(pez => pez.especie.toLowerCase() === especie.toLowerCase())
      }
      if (nombre) {
        filteredData = filteredData.filter(pez => pez.nombre.toLowerCase() === nombre.toLowerCase())
      }
      if (color) {
        filteredData = filteredData.filter(pez => pez.color.toLowerCase() === color.toLowerCase())
      }

      res.status(200).json({
        msg: 'Se ha mostrado con exito.',
        data: filteredData
      })
        .catch((error) => {
          console.log(error)

          res.status(400).json({
            msg: 'No se ha podido mostrar.',
            error
          })
        })
    })
}

/* param */
const getPezByColor = (req = request, res = response) => {
  const { colorPez } = req.params
  console.log(colorPez)

  axios.get(`https://66f21a344153791915530b67.mockapi.io/api/v1/peces?color=${colorPez}`)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Se ha mostrado con exito.',
        data
      })
        .catch((error) => {
          console.log(error)

          res.status(400).json({
            msg: 'No se ha podido mostrar.',
            error
          })
        })
    })
}

module.exports = {
  getPeces,
  getPezByColor
}
