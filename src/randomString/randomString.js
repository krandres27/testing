const cities = ['Bogotá', 'Ciudad de Mexico', 'Buenos Aires'];
const randomString = () => cities[Math.floor(Math.random() * cities.length)];
module.exports = randomString;
