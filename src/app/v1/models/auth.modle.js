const users = require("../../../data/dummy/auth.dummy");

class authModle {
    static createUser(username, password) {
        return users.push({username, password});
    }
    
    static getUser(username) { 
        return users.find((user) => user.username === username);
    }

}

module.exports = authModle;