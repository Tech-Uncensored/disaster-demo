const User = require('../lib/User');
const Weather = require('../lib/Weather');

class DashboardService {
    constructor(db, userid) {
        this.db = db;
        this.user = new User(db, userid)
        this.weather = new Weather(db);
    }

    async params() {
        let userDetails = await this.user.userDetails;
        let weatherData = await this.weather.data;
        let regionData = await this.user.regionData;

        return {
            data: weatherData,
            userData: userDetails || {}, 
            regionData: regionData
        }
    }

}


module.exports = DashboardService;