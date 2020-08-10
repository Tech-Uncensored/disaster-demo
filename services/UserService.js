class UserService {
    constructor(userid) {
        this.user = User.find(userid);
    }

    userDetails() {

    }
}

module.exports = UserService;