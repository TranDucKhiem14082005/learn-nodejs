const {Pool} = require('pg');
const configPG = require('../configs/db.config');

class PgDatabase {
    constructor() {
        this.pool = new Pool({
            host: configPG.host,
            port: configPG.port,
            user: configPG.user,
            password: configPG.password,
            database: configPG.database,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000
        })
    }

    async connectDB() {
        try {
            const client = await this.pool.connect();
            console.log("Connect to database successfully");
            client.release(); // dong connection sau khi su dung xong
        } catch (error) {
            console.error("Error connecting to database:", error);
        }
    }
}

module.exports = new PgDatabase();