const authService = require("../services/auth.service");

class authController {
    // register(req, res) {
    //     const {username, password} = req.body;
    //     // req.body nội dung người dùng gửi cho BE
    //     // nhận xong thì chuyển cho thằng Service để xử lý logic
    //     // Controller để trả về thông báo hoặc các mã kết qủa
    //     const result = authService.register(username, password);

    //     if(result.success === false) {
    //         return res.status(result.status).json({
    //             message: result.message
    //         });
    //     }

    //     return res.status(201).json({
    //         message: "Register successfully",
    //         data: result
    //     });
    // }
    // login(req, res) {
    //     const {username, password} = req.body;
    //     const result = authService.login(username, password);

    //     return res.status(200).json({
    //         message: result.message,
        
    //     }) 
    // }
    register(req,res) {
        const {username, password} = req.body;
        const result = authService.register(username, password);
        if(result.success === false) {
            return res.status(result.status).json({
                message: result.message
            });
        }
        return res.status(201).json({
            message: "Register successfully",
            data: result
        });
    }

    login(req, res) {
        const {username, password} = req.body;
        const result = authService.login(username, password);
        if(result.success === false) {
            return res.status(result.status).json({
                massage: result.massage
            });
        }
        return res.status(200).json({
            massage: result.massage
        });
    }

}

module.exports = new authController();