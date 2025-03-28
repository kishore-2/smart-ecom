export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // Note: In a real application, do not store passwords in plain text
}