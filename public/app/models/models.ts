export class IdentificationType{
    public id?: number;
    public name?: string;
}

export class Person {
    public identification?: number;
    public first_name?: string;
    public last_name?: string;
}

export class Company {
    public identification?: number;
    public identification__type_id?: number;
    public name?: string;
    public website?: string;
    public phone?: number;
}

export class User {
    public email?: string;
    public identification?: number;
    public Company?: Company;
    public type?: string;
    public password?: string;
}

export class Job {
    public id?: number;
    public name?: string;
    public description?: string;
}

export class Vacancy {
    public id?: number;
    public Company?: Company;
    public company_id?: number;
    public created_at?: string;
    public end_date?: string;
    public Job?: Job;
    public job_id?: number;
    public salary?: number;
}