'use strict'
module.exports = (sequelize, DataTypes) => {
  const Weather = sequelize.define('Weather', {
    desc: "cloudy",
    main: "chance of meatballs",
    temp: 70,
    humidity: 15,
    feels_like: 82
  }, {
    timestamp: false
  })
  Weather.associate = function(models) {
    // associations can be defined here
  }
  return Weather
}