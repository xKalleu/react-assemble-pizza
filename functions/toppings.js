const pizzaTopping = [{
    id: 0,
    name: 'Pepperoni',
    url: '../../assets/images/pepperoni.jpg',
  },

  {
    id: 1,
    name: 'Mushrooms',
    url: '../../assets/images/mushrooms.jpg',
  },

  {
    id: 2,
    name: 'Onions',
    url: '../../assets/images/onions.png',
  },

  {
    id: 3,
    name: 'Sausage',
    url: '../../assets/images/sausages.jpg',
  },

  {
    id: 4,
    name: 'Bacon',
    url: '../../assets/images/bacon.jpg',
  },

  {
    id: 5,
    name: 'Extra cheese',
    url: '../../assets/images/extra-chese.jpg',
  },

  {
    id: 6,
    name: 'Black olives',
    url: '../../assets/images/black-olives.jpg',
  },

  {
    id: 7,
    name: 'Green peppers',
    url: '../../assets/images/green-peppers.jpg',
  },

  {
    id: 8,
    name: 'Pineapple',
    url: '../../assets/images/pineapple.jpg',
  },

  {
    id: 9,
    name: 'Spinach',
    url: '../../assets/images/spinach.jpg',
  },
]

exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: JSON.stringify(pizzaTopping)
  }
}