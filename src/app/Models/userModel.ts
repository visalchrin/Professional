 export class User {
    fullname: string;
    email: string;
    skill: string;
    experience: string;
    description: string;
    username: string;
    password: string;

    public constructor(
        fullname: string,
        email : string,
        skill: string,
        experience: string,
        description: string,
        username: string,
        password: string
    ) {
        this.fullname = fullname;
        this.email = email;
        this.skill = skill;
        this.experience = experience;
        this.description = description;
        this.username = username;
        this.password = password;
    }
}
