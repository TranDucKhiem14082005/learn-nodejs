const authModle = require("../models/auth.modle");

class authService {
    register(username, password) {

        // 1. check invalid
        if(!username || !password) {
            return {
                message: "Username or password is required",
                success: false,
                status: 400

            }
        }

        //2. Check exit
        const user = authModle.getUser(username);

        console.log(user);

        if(user) {
            return {
                success: false,
                message: "Username is already exists",
                status: 400
            }
        }

        authModle.createUser(username, password);
        
        return  {username, password};
    }
    login(username, password) {
        if(!username || !password) {
            return {
                message: "Username or password is required",
                success: false,
                status: 400
            }
        }   

        const user = authModle.getUser(username);

        if(!user) {
            return {
                message: "Username is not exists",
                success: false,
                status: 400
            }
        }

        if(user.password !== password) {
            return {
                message: "Password is incorrect",
                success: false,
                status: 400
            }
        }

        return {
            message: "Login successfully",
          
        }
    }
}

module.exports = new authService();