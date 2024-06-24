export interface IUser {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isAuthenticated: boolean;
    isOnline: boolean;
    created: string;
    avatar?: string
}