const User = require('../lib/user');

class DashboardService {
    constructor(db, userid) {
        this.db = db;
        this.user = new User(db, userid)
    }

    async params() {
        let userDetails = await this.user.userDetails;
        let regionData = await this.user.regionData;

        return {
            userData: userDetails || {}, 
            regionData: regionData
        }
    }

}


module.exports = DashboardService;