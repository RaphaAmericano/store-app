export interface User {
    email: string;
}
export interface UserRequest extends User {
    password: string;
}
export interface UserAuth extends UserRequest{
    id: string;
    avatar: string;
}