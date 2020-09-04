// @ts-ignore
const endpoint = `${window.location.origin}/.netlify/functions`;

export const endpoints = {
  getSizes: `${endpoint}/sizes`,
  getCrusts: `${endpoint}/crusts`,
  getToppings: `${endpoint}/toppings`,
}

