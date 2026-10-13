const authModle = require("../models/auth.modle");

class authService {



    register(username,password) {{
        if(!username || !password) {
            return {
                message: "Username or password is required",
                success: false,
                status: 400
            };
        }
        var user = authModle.getUser(username);
        if(user) {
            return {
                message: "Username is already exists",
                success: false,
                status: 400
            };
        }
        authModle.createUser(username,password);
        return {username, password};
    }}

    async login(username,password) {
        if(!username || !password) {
            return {
                message: "Username or password is required",
                success: false,
                status: 400
            };
        }
        const user = await authModle.getUser(username);
        if(!user) {
            return {
                message: "Username is not exists",
                success: false,
                status: 400
            };
        }
       
        return {
            message: "Login successfully",
            user,
        }
    }

}

module.exports = new authService();