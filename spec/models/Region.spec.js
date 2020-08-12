  
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    user_id: "1",
    region: "northwest"
  }, {
    timestamps: false
  })
  Region.associate = function(models) {
    // associations can be defined here
  }
  return Region
}