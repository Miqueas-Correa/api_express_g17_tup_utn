const axios = require('axios')
const { request, response } = require('express')

// URL CATS:
// * URL de busqueda especifica de mis endpoints:
// * http://localhost:3000/api/v1/cats
// * http://localhost:3000/api/v1/cats/55
// * http://localhost:3000/api/v1/cats/cazador/false
// * http://localhost:3000/api/v1/cats/color/blue

// * QUERY PARAMS:
// * http://localhost:3000/api/v1/cats?color=blue
// * http://localhost:3000/api/v1/cats?color=blue&id=21
// * http://localhost:3000/api/v1/cats?nombre=pietro&id=21
// * http://localhost:3000/api/v1/cats?cazador=true&id=21

// Endpoint--> todo muestra
const getCats = async (req = request, res = response) => {
  const { id = '', raza = '', nombre = '', fechaNacimiento = '', color = '', cazador = '' } = req.query

  try {
    const response = await axios.get('https://66f21e0f415379191553149f.mockapi.io/api/v1/gatitosss') // en todas uso funciones asincronicas para manejar la solicitudes y demas
    const { data = {} } = response

    // filtro los gatos segun los parametros de la consulta
    const filterDataCat = data.filter(cat => {
      const Id = id ? cat.id === id : true // conpruevo si el id coincide
      const Raza = raza ? cat.raza.toLowerCase() === raza.toLowerCase() : true // aca y en las demas uso .toLowerCase para q en este caso ignore las mayuscula
      const Nombre = nombre ? cat.nombre.toLowerCase() === nombre.toLowerCase() : true
      const FechaNacimiento = fechaNacimiento ? cat.fechaNacimiento === fechaNacimiento : true
      const Color = color ? cat.color.toLowerCase() === color.toLowerCase() : true
      const Cazador = cazador ? String(cat.cazador) === cazador : true

      // retorno verdadero si tods coinciden
      return Id && Raza && Nombre && FechaNacimiento && Color && Cazador
    })

    res.status(200).json({ // devuelvo respues de ok si se filtran los gatos
      msg: 'Ok',
      data: filterDataCat
    })
  } catch (error) { // manejo el error
    console.log(error)
    res.status(400).json({
      msg: 'Error a buscar todos los gatos', // mensage del error
      error: 'no se encontro' // detallle del error
    })
  }
}

// Endpoint--> id
const getCatE2 = async (req = request, res = response) => {
  const { id } = req.params // extraigo el id de los parametro de la solicirudes

  try {
    const response = await axios.get(`https://66f21e0f415379191553149f.mockapi.io/api/v1/gatitosss/${id}`)
    const { data } = response

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      msg: 'Error al buscar el gato por ID',
      error: 'no se encontro'
    })
  }
}

// Endpoint--> cazador true or false
const getCatE3 = async (req = request, res = response) => {
  const { cazador } = req.params

  try {
    const response = await axios.get(`https://66f21e0f415379191553149f.mockapi.io/api/v1/gatitosss?cazador=${cazador}`)
    const { data } = response

    const filteredDataCat = data.filter(cat => String(cat.cazador) === cazador)

    res.status(200).json({
      msg: 'Ok',
      data: filteredDataCat
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      msg: 'Error al al filtrar por cazador',
      error: 'no se encontro'
    })
  }
}

// Endpoint--> color
const getCatE4 = async (req = request, res = response) => {
  const { color } = req.params

  try {
    const response = await axios.get(`https://66f21e0f415379191553149f.mockapi.io/api/v1/gatitosss?color=${color}`)
    const { data } = response

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      msg: 'Error al al filtrar por coloor',
      error: 'no se encontro'
    })
  }
}

module.exports = {
  getCats,
  getCatE2,
  getCatE3,
  getCatE4
}
