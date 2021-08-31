export class User {
    email: string;
    passwd: string;
    username: string;
    roles: string[];
    authorities: string[];
    constructor(email: string, passwd: string, username: string, roles: string[], authorities: string[]){
        this.username = username;
        this.email = email;
        this.passwd = passwd;
        this.roles = roles;
        this.authorities = authorities;
    }

}
