const pizzaSizes = [{
    id: 0,
    name: 'Small',
    value: 8,
    maxIngredients: 5,
  },

  {
    id: 1,
    name: 'Medium',
    value: 10,
    maxIngredients: 7,
  },

  {
    id: 2,
    name: 'Large',
    value: 12,
    maxIngredients: 9,
  }
]

exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: JSON.stringify(pizzaSizes)
  }
}