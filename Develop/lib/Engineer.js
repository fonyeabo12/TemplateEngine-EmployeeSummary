// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, GitHubUser) {
        super(name, id, email);
        this.github = GitHubUser;
        this.role = 'Engineer';

       
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }



}


module.exports = Engineer;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
