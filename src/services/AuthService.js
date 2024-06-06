import $api from "../http";

export default class AuthService {
    static async login(usernameOrEmail, password) {
        return $api.post('/authentication/login', {usernameOrEmail, password})
    }

    static async registration(username, email, password, form, age) {
        return $api.post('/student/registration', {username, email, password, form, age})
    }

    static async logout() {
        return $api.post('/authentication/logout')
    }

    static async refresh() {
        return $api.get('/authentication/refresh')
    }
}