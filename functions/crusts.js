const pizzaCrust = [{
    id: 0,
    name: 'Thin',
    value: 2,
  },

  {
    id: 1,
    name: 'Thick',
    value: 4,
  },
]

exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: JSON.stringify(pizzaCrust)
  }
}