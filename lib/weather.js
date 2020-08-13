class Weather {
    constructor(db, user) {
        this.db = db;
    }

    get data() {
        return ( async () => {
            return await this.db.Weather.FindAll();
        })();
    }
}

module.exports = Weather;