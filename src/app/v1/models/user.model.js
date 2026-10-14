const pgDatabase = require("../../../database/pg.database");

class userModle {
    static async getUsers(){
        const result = await pgDatabase.pool.query(
            "SELECT * FROM users"
        );
        return result.rows;
    
    }
    
    static async getUser(userId) {
        const resutl = await pgDatabase.pool.query(
            "SELECT * FROM users WHERE id = $1", [userId]
        );
        return resutl.rows[0];
    }
    static async createUser(name, email) {
       const result =  await pgDatabase.pool.query(
            "INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *",[name, email]
        );
        return result.rows[0];
    }

    static updateUser(userID, name, email){
        return pgDdatabase.pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",[name,email,userID]

        );
    }

    static deleteUser(userID){
        return pgDatabase.pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",[userID]
        );
    }
 
   
}

module.exports =  userModle;