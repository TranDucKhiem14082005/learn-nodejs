const users = require("../../../data/dummy/auth.dummy");
const pgDatabase = require("../../../database/pg.database");

class authModle {
    

    static createUser(username, password) {
        return users.push({username, password});
    }

    static async getUser(username) {
        const resutl = await pgDatabase.pool.query(
            "SELECT * FROM users WHERE username = $1", [username]
        );
        return resutl.rows[0];
    }
}

module.exports =  authModle;