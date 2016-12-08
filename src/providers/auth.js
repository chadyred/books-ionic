import { tokenNotExpired } from 'angular2-jwt';
export var AuthService = (function () {
    function AuthService() {
    }
    AuthService.authenticated = function () {
        return tokenNotExpired();
    };
    return AuthService;
}());
//# sourceMappingURL=auth.js.map