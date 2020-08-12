class auth {
    constructor() {
        this.authenticated = false;
    }
    login(cb, username, password) {
        if (username === 'dummy' && password === 'dummy') {
            this.authenticated = true;
            console.log(username, ' ', password);
            cb();
        } else {
            return;
        }
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new auth();
