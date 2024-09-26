const axios = require('axios')
const { request, response } = require('express')
const URLANIMAL = 'https://66d0f21f181d059277e01d3c.mockapi.io/api/v1/crocodiles/'

const getCrocodiles = (req = request, res = response) => {
  const { id = '', name = '', color = '', habitat = '' } = req.query
  console.log(id, name, color, habitat)

  const params = new URLSearchParams()
  if (id) params.append('id', id)
  if (name) params.append('name', name)
  if (color) params.append('color', color)
  if (habitat) params.append('habitat', habitat)

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

const getCrocodile = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(`${URLANIMAL}${id}`)
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
        error: 'Not found'
      })
    })
}

const getCrocodileName = (req = request, res = response) => {
  const { name = '' } = req.params
  console.log(name)

  axios.get(URLANIMAL + '?name=' + name)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(400).json({
        msg: 'Error.',
        error: 'Not found'
      })
    })
}

const getCrocodileColor = (req = request, res = response) => {
  const { color = '' } = req.params
  console.log(color)

  axios.get(URLANIMAL + '?color=' + color)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(400).json({
        msg: 'Error.',
        error: 'Not found'
      })
    })
}

const getCrocodileHabitat = (req = request, res = response) => {
  const { habitat = '' } = req.params
  console.log(habitat)

  axios.get(URLANIMAL + '?habitat=' + habitat)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)

      res.status(400).json({
        msg: 'Error.',
        error: 'Not found'
      })
    })
}

module.exports = {
  getCrocodiles,
  getCrocodile,
  getCrocodileName,
  getCrocodileColor,
  getCrocodileHabitat
}
