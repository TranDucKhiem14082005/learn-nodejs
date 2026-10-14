const userModle = require("../models/user.model");

class userService {

    async getUsers() {
        const users = await userModle.getUsers();
        if (!users) {
            throw new Error("No users found");
        }
        return {
            users
        };
    }
    
    async getUserById({userID}){
        if(!userID){
            return { error: "User ID is required" };
        }
        const user = await userModle.getUser(userID);
        if(!user){
            return { error: "User not found" };
        }
        return { user };
    }

    async createdUser({name,email}) {
        if (!name || !email) {
            return {
                error: "Name and email are required"
            };
        }
        const user = await userModle.createUser(name,email);
        if(!user) {
            return {
                error: "User creation failed"
            };
        }
        return {
           message: "User created successfully",
           user
        };
    }

    async updateUser({userID,name,email}) {
        if (!userID) {
            return {
                error: "User ID is required"
            };
        }

        const user = await userModle.updateUser(userID,name,email);
        if(!user) {
            return {
                error: "User update failed"
            }
        }
        return {
           user
        };
    }

    async deleteUser(userID) {
        if (!userID) {
            return {
                error: "User ID is required"
            };
        }
        userModle.deleteUser(userID);
        return {
            message: "User deleted successfully"
        };
    }

   

}

module.exports = new userService();