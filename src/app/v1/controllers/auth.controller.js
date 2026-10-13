const authService = require("../services/auth.service");

class authController {
    

    register(req,res){
        const {username, password} = req.body;
        const result = authService.register(username , password);
        if(result.success === false) {
            return res.status(result.status).json({
                message: result.message
            })
        }
        return res.status(201).json({
            message: "Register successfully",
            data: result
        });
    }

    async login(req,res) {
        const {username, password} = req.body;
        const result = await authService.login(username, password);
        if(result.success === false) {
            return res.status(result.status).json({
                message: result.message
            });
        }
        return res.status(200).json(result);
    }

}

module.exports = new authController();