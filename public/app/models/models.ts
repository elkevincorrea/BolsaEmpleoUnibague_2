export class IdentificationType{
    public id: number;
    public name: string;
}

export class Person {
    public identification: number;
    public first_name: string;
    public last_name: string;
}

export class Company {
    public identification: number;
    public identification__type_id: number;
    public name: string;
    public website: string;
    public phone: number;
}

export class User {
    public email: string;
    public identification: number;
    public Company: Company;
    public type: string;
}