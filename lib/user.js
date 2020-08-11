class User {
    constructor(db, userid) {
        this.db = db;
        this.user_id = userid;
        this.user = null;
    }

    get userDetails() {
        return this.user || ( async () => {
            return await this.db.Settings.findOrCreate({
                where: {
                    user_id: this.user_id
                }
            }).then( data => {
                this.user = data[0];
                return this.user;
            })
        })();
    }
}

module.exports = User;