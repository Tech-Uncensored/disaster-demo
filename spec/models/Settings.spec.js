'use strict'
module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
        user_id: 1,
        smsNotification: 1,
        pushNotification: 1,
        emailNotification: 1,
        alexaNotification: 1,
        phoneNum: "555-5555",
        alertInterval: 60,
        location: "Gothem City"
    }, {
        timestamps: false
    })
    Settings.associate = function (models) {
        // associations can be defined here       
    }

    return Settings

}