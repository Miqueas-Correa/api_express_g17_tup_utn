const axios = require('axios')
const { request, response } = require('express')

const urlAPI = 'https://66f21a344153791915530b67.mockapi.io/api/v1/peces/'

/* Query Params */
const getPeces = (req = request, res = response) => {
  const { id = '', especie = '', nombre = '', color = '', avatar = '', favorite = '' } = req.query
  console.log(id, especie, nombre, color, avatar, favorite)

  const params = new URLSearchParams()

  if (id) params.append('id', id)
  if (especie) params.append('especie', especie)
  if (nombre) params.append('nombre', nombre)
  if (color) params.append('color', color)
  if (avatar) params.append('avatar', avatar)
  if (favorite) params.append('favorite', favorite)

  const filtro = params.toString() ? `?${params.toString()}` : ''

  axios.get(urlAPI + filtro)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(404).json({
        msg: 'No se ha podido mostrar.',
        error: 'La API no cuenta con esos datos disponibles.'
      })
    })
}

// Función para obtener un perro por su ID
const getPez = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(`${urlAPI}${id}`)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(404).json({
        msg: 'Error',
        error: 'Not  found'
      })
    })
}

/* param para buscar por color */
// const getPezByColor = (req = request, res = response) => {
//   const { colorPez } = req.params
//   console.log(colorPez)

//   axios.get(`https://66f21a344153791915530b67.mockapi.io/api/v1/peces?color=${colorPez}`)
//     .then((response) => {
//       const { data } = response

//       res.status(200).json({
//         msg: 'Se ha mostrado con exito.',
//         data
//       })
//     })
//     .catch((error) => {
//       console.log(error)

//       res.status(400).json({
//         msg: 'No se ha podido mostrar.',
//         error: 'Lo siento, no se ha podido buscar ese parametro.'
//       })
//     })
// }

/* param para buscar por especie */
const getPezByEspecie = (req = request, res = response) => {
  const { especiePez } = req.params
  console.log(especiePez)

  axios.get(urlAPI + '?especie=' + especiePez)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Se ha mostrado con exito.',
        data /* muestra todos los que contengan lo pasado en el nombre aunque sea una especie de nombre compuesto */
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(400).json({
        msg: 'No se ha podido mostrar.',
        error: 'Lo siento, no se ha podido buscar ese parametro.'
      })
    })
}

/* param para buscar por nombre */
const getPezByNombre = (req = request, res = response) => {
  const { nombrePez = '' } = req.params
  console.log(nombrePez)

  axios.get(`https://66f21a344153791915530b67.mockapi.io/api/v1/peces?nombre=${nombrePez}`)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Se ha mostrado con exito.',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(404).json({
        msg: 'No se ha podido mostrar.',
        error: 'Lo siento, no se ha podido buscar ese parametro.'
      })
    })
}

/* param para buscar por id */
// const getPezByID = (req = request, res = response) => {
//   const { idPez } = req.params
//   console.log(idPez)

//   axios.get(`https://66f21a344153791915530b67.mockapi.io/api/v1/peces/${idPez}`)
//     .then((response) => {
//       const { data } = response

//       res.status(200).json({
//         msg: 'Se ha mostrado con exito.',
//         data
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//       res.status(400).json({
//         msg: 'No se ha podido mostrar.',
//         error: 'Lo siento, no se ha podido buscar ese parametro.'
//       })
//     })
// }

module.exports = {
  getPeces,
  getPez,
  // getPezByColor,
  getPezByEspecie,
  getPezByNombre,
  // getPezByID
}
