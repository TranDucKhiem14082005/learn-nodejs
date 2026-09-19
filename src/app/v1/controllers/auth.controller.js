const authService = require("../services/auth.service");

class authController {
    register(req, res) {
        const { username, password } = req.body;// thông tin từ người dùng nhập trên input sau đó chuyển sang service
            //

        const result = authService.register(username,password);
        
        // thông báo là đã tạo thành công: 201
        //nodejs luôn trả về một kiểu dữ liệu là json nên dùng res.json để trả về dữ liệu
        // kiểu dữ liệu json nó nhẹ
        return res.status(201).json({
            message: "User created successfully",
            data: result,
        });  
    }
}

module.exports = new authController();