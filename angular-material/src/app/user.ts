export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    gender: 0|1;
    phoneNumber: string;
    subject:string;
    hobbies: string;
    dateOfBirth:Date;
    note: string;
}