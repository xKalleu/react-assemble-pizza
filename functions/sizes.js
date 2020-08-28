const pizzaSizes = [{
    id: 0,
    name: 'Small',
    size: 8,
    flavours: 5
  },

  {
    id: 1,
    name: 'Medium',
    size: 10,
    flavours: 7
  },

  {
    id: 2,
    name: 'Large',
    size: 12,
    flavours: 9
  }
]

exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: JSON.stringify(pizzaSizes)
  }
}