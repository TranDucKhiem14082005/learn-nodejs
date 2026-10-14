const userService = require("../services/user.service");

class userController {
    

    async getUsers(_,res){
       const result = await userService.getUsers();
       return res.status(200).json(result);
    }

    async getUserById(req,res) {
        const {userID} = req.params;
        console.log(userID);
        const result = await userService.getUserById({userID});
        return res.status(200).json(result);
    }

    async createdUser(req,res) {
        const {name,email} = req.body;
        const result = await userService.createdUser({name,email});
        return res.status(200).json(result);
    }

    async updateUser(req,res) {
        const {userID,name,email} = req.body;
        const result = await userService.updateUser({userID,name,email});
        return res.status(200).json(result);
    }

    async deleteUser(req,res) {
        const {userID} = req.params;
        const result = await userService.deleteUser(userID);
        return res.status(200).json(result);
    }

}

module.exports = new userController();