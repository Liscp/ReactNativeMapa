const Sequelize = require('sequelize');
const sequelize = new Sequelize('Datos', 'root', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});

let datos = sequelize.define('datos', {
  nombre: Sequelize.STRING,
  latitud: Sequelize.STRING,
  longitud: Sequelize.STRING,
  fecha: Sequelize.STRING,
  status: Sequelize.STRING
},
{
  timestamps: false
})

module.exports = datos;