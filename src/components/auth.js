import axios from 'axios';

class auth {
    constructor() {
        this.authenticated = false;
    }
    async login(cb, username, password) {
        try {
            const res = await axios.post('http://localhost:5000/auth/login', { email: username, password: password });
            // const reply = await axios.get('http://localhost:5000/requirement/active');
            console.log(res.data);
            if(res.data.id) {
                this.authenticated = true;
                console.log(username, ' ', password);
                cb();
            } else {
                return;
            }

        } catch(err) {
            // console.log('An error occured');
            console.log(err.message);
        }
        // if (username === 'dummy' && password === 'dummy') {
            
        // } else {
        //     return;
        // }
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
