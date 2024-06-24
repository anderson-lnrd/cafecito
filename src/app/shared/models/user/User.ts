export class User {
    constructor(
        public id: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public isAuthenticated: boolean,
        public isOnline: boolean,
        public created: string,
        public avatar?: string,
    ){} 
}