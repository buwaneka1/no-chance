class Util {
    static setLocals(locals) {
        localStorage.setItem('token', locals.token);
        localStorage.setItem('username', locals.username);
    }

    static getLocals(local) {
        return localStorage.getItem(local);
    }
}

export default Util;