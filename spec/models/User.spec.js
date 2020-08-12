module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@test.com",
      password: "abc123"
    }, {
        timestamp: false
    })
  
    User.associate = function(models) {
      User.hasOne(models.Settings, {foreignKey: 'user_id'})
      User.hasOne(models.Region, {foreignKey: 'user_id'})
    }
  
    return User
  }