const User = require('../lib/User');

class DashboardService {
    constructor(db, userid) {
        this.db = db;
        this.user = new User(db, userid)
    }

    async params() {
        let userDetails = await this.user.userDetails
        let weatherData = await this.queryWeatherData();
        let regionData = await this.queryRegionData()

        return {
            data: weatherData,
            userData: userDetails || {}, 
            regionData: regionData
        }
    }

    async queryRegionData() {
        let userDetails = await this.user.userDetails;

        let data = await this.db.Region.findAll({
            where: {
                user_id: userDetails.id
            }
        })

        return data
    }

    async queryWeatherData() {
        let data = await this.db.Weather.findAll()
        return data
    }
}


module.exports = DashboardService;