class authService {
    register(username,password) {
        return {username, password};
    }
}

module.exports  = new authService();