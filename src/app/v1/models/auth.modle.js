const users = require("../../../data/dummy/auth.dummy");

class authModel {

    createUser(username, password) {
        return users.push({username, password});
    }

}

module.exports = authModel;